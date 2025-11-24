import { Request, Response } from "express";
import ReadingHistory from "../models/readingHistory.js";
import Book from "../models/book.js";
import Chapter from "../models/chapter.js";

// Update history when user reads a chapter
export const updateReadingHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bookId, chapterId, progress } = req.body;

    // Verify book & chapter exist
    const book = await Book.findById(bookId);
    const chapter = await Chapter.findById(chapterId);

    if (!book || !chapter)
      return res.status(404).json({ message: "Book or chapter not found" });

    const history = await ReadingHistory.findOneAndUpdate(
      { userId, bookId },
      { chapterId, progress },
      { upsert: true, new: true }
    );

    res.json(history);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get all continue reading items for user
export const getContinueReading = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const history = await ReadingHistory.find({ userId })
      .populate("bookId", "title coverImage author")
      .populate("chapterId", "title number")
      .sort({ updatedAt: -1 });

    res.json(history);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get last read chapter for a specific book
export const getLastReadChapter = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bookId } = req.params;

    const history = await ReadingHistory.findOne({ userId, bookId })
      .populate("chapterId", "title number");

    res.json(history || { chapterId: null, progress: 0 });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
