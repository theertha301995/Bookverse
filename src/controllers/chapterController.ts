import { Request, Response } from "express";
import Chapter from "../models/chapter.js";
import Book from "../models/book.js";

// Create chapter
export const createChapter = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const { title, content, order } = req.body;

    // Check if book exists and belongs to the author
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.author.toString() !== req.user?.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const chapter = await Chapter.create({
      bookId,
      title,
      content,
      order
    });

    res.status(201).json(chapter);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get all chapters of a book
export const getChapters = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const chapters = await Chapter.find({ bookId }).sort({ order: 1 });
    res.json(chapters);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single chapter (reader or author)
export const getChapter = async (req: Request, res: Response) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);

    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    res.json(chapter);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Update chapter
export const updateChapter = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findById(chapterId);
    if (!chapter) return res.status(404).json({ message: "Not found" });

    // Verify author ownership
    const book = await Book.findById(chapter.bookId);
    if (book?.author.toString() !== req.user?.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updated = await Chapter.findByIdAndUpdate(
      chapterId,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Delete chapter
export const deleteChapter = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findById(chapterId);
    if (!chapter) return res.status(404).json({ message: "Not found" });

    const book = await Book.findById(chapter.bookId);
    if (!book || book.author.toString() !== req.user?.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await Chapter.findByIdAndDelete(chapterId);

    res.json({ message: "Chapter deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Publish / Unpublish chapter
export const togglePublishChapter = async (req: Request, res: Response) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Not found" });

    const book = await Book.findById(chapter.bookId);
    if (book?.author.toString() !== req.user?.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    chapter.isPublished = !chapter.isPublished;
    await chapter.save();

    res.json(chapter);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
