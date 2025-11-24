// src/routes/notificationRoutes.ts
import express from "express";
import { listNotifications, markRead, markAllRead } from "../controllers/notificationController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/", authMiddleware, listNotifications);
router.patch("/:id/read", authMiddleware, markRead);
router.patch("/mark-all-read", authMiddleware, markAllRead);
export default router;
//# sourceMappingURL=notificationRoutes.js.map