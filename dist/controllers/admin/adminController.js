// controllers/adminController.ts
import User from "../../models/admin/user.js";
import Book from "../../models/admin/book.js";
import Report from "../../models/admin/report.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("authorId", "username");
        res.json(books);
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const updateBookStatus = async (req, res) => {
    try {
        const { status } = req.body; // approved/rejected
        await Book.findByIdAndUpdate(req.params.id, { status });
        res.json({ message: "Book status updated" });
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const getReports = async (req, res) => {
    try {
        const reports = await Report.find()
            .populate("reporterId", "username")
            .lean();
        res.json(reports);
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const reviewReport = async (req, res) => {
    try {
        await Report.findByIdAndUpdate(req.params.id, { status: "reviewed" });
        res.json({ message: "Report marked as reviewed" });
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
//# sourceMappingURL=adminController.js.map