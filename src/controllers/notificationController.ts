// src/controllers/notificationController.ts
import type { Request, Response } from "express";
import Notification from "../models/notification.js";

const DEFAULT_PAGE_SIZE = 20;

// GET /api/notifications?page=1&limit=20
export const listNotifications = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Number(req.query.limit) || DEFAULT_PAGE_SIZE);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Notification.find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("actorId", "username"),
      Notification.countDocuments({ userId }),
    ]);

    res.json({
      page,
      limit,
      total,
      results: items,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /api/notifications/:id/read  -> toggle or mark read
export const markRead = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id;

    const notif = await Notification.findOneAndUpdate(
      { _id: id, userId },
      { read: true },
      { new: true }
    );

    if (!notif) return res.status(404).json({ message: "Not found" });

    res.json(notif);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /api/notifications/mark-all-read
export const markAllRead = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    await Notification.updateMany({ userId, read: false }, { read: true });
    res.json({ message: "All notifications marked read" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
