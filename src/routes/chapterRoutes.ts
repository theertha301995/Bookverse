import express from "express";
import {
  createChapter,
  getChapters,
  getChapter,
  updateChapter,
  deleteChapter,
  togglePublishChapter,
} from "../controllers/chapterController.js";

import { authMiddleware } from "../../src/middleware/authMiddleware.js";

const router = express.Router();

// Protected: authors only
router.post("/:bookId", authMiddleware, createChapter);
router.patch("/:chapterId", authMiddleware, updateChapter);
router.delete("/:chapterId", authMiddleware, deleteChapter);
router.patch("/:chapterId/publish", authMiddleware, togglePublishChapter);

// Public (readers + authors)
router.get("/book/:bookId", getChapters);
router.get("/:chapterId", getChapter);

export default router;
