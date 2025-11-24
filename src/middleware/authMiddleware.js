import jwt from "jsonwebtoken";
import user from "../models/user.js"; // adjust path/casing to match your project
export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = (req.headers.authorization || "").toString();
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const parts = authHeader.split(" ");
        const token = parts[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({ message: "JWT secret not configured" });
        }
        const decoded = jwt.verify(token, secret);
        if (!decoded?.id) {
            return res.status(401).json({ message: "Invalid token payload" });
        }
        // fetch user from DB and attach to req.user (without password)
        const users = await user.findById(decoded.id).select("-password");
        if (!users) {
            return res.status(401).json({ message: "User not found" });
        }
        // attach user to request (type augmentation required - see below)
        req.users = users;
        return next();
    }
    catch (err) {
        console.error("Auth middleware error:", err);
        return res.status(401).json({ message: "Not authorized", error: err.message });
    }
};
/**
 * requireRole - middleware factory to restrict route to a role or roles
 * Usage: router.post('/some', authMiddleware, requireRole('author'))
 * Or: requireRole('admin', 'author')
 */
export const requireRole = (...roles) => {
    return (req, res, next) => {
        const users = req.users;
        if (!user)
            return res.status(401).json({ message: "Not authenticated" });
        if (!roles.includes(users.role)) {
            return res.status(403).json({ message: "Forbidden: insufficient role" });
        }
        next();
    };
};
//# sourceMappingURL=authMiddleware.js.map