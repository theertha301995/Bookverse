import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server as IOServer } from "socket.io";
import jwt from "jsonwebtoken";
import Notification from "./models/notification.js";
// Routes imports...
import adminRoutes from "./routes/admin/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import chapterRoutes from "./routes/chapterRoutes.js";
import ratingRoutes from "./routes/ratingRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import readingHistoryRoutes from "./routes/readingHistoryRoutes.js";
import followRoutes from "./routes/followRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";
import summaryRoutes from "./routes/SummaryRoutes.js";
import writingAssistantRoutes from "./routes/writingAssistantRoutes.js";
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Default route
app.get("/", (_req, res) => {
    res.send("Book App API is running...");
});
// API Routes
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/history", readingHistoryRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/summaries", summaryRoutes);
app.use("/api/ai-writing", writingAssistantRoutes);
// --- Socket.IO setup ---
const server = http.createServer(app);
const io = new IOServer(server, {
    cors: { origin: process.env.FRONTEND_ORIGIN || "*", credentials: true },
});
const onlineSockets = new Map();
io.use((socket, next) => {
    const token = socket.handshake.auth?.token || socket.handshake.query?.token;
    if (!token)
        return next();
    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        socket.userId = decoded.id;
        return next();
    }
    catch {
        return next();
    }
});
io.on("connection", (socket) => {
    const userId = socket.userId;
    if (userId) {
        const set = onlineSockets.get(userId) ?? new Set();
        set.add(socket.id);
        onlineSockets.set(userId, set);
    }
    socket.on("disconnect", () => {
        if (userId) {
            const set = onlineSockets.get(userId);
            if (set) {
                set.delete(socket.id);
                if (set.size === 0)
                    onlineSockets.delete(userId);
                else
                    onlineSockets.set(userId, set);
            }
        }
    });
});
// helper to send notification
export const sendNotification = async (payload) => {
    const doc = await Notification.create({
        userId: payload.userId,
        actorId: payload.actorId,
        type: payload.type,
        entityType: payload.entityType,
        entityId: payload.entityId,
        text: payload.text,
        metadata: payload.metadata || {},
        read: false,
    });
    const sockets = onlineSockets.get(payload.userId);
    if (sockets) {
        for (const sid of sockets) {
            io.to(sid).emit("notification", doc);
        }
    }
    return doc;
};
// --- MongoDB & Server Start ---
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose
    .connect(MONGO_URI)
    .then(() => {
    console.log("✅ MongoDB Connected");
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
    .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
});
//# sourceMappingURL=server.js.map