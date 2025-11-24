import { Request, Response } from "express";
import Library from "../models/library.js";
import Book from "../models/book.js";

// Add a book to the user's library
export const addToLibrary = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bookId } = req.params;

    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const entry = await Library.findOneAndUpdate(
      { userId, bookId },
      {},
      { new: true, upsert: true }
    );

    res.json({ message: "Book added to library", entry });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Book already in library" });
    }
    res.status(500).json({ message: err.message });
  }
};

// Remove a book from the library
export const removeFromLibrary = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bookId } = req.params;

    await Library.findOneAndDelete({ userId, bookId });

    res.json({ message: "Book removed from library" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Check if a book is in the user's library
export const checkLibraryStatus = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bookId } = req.params;

    const entry = await Library.findOne({ userId, bookId });

    res.json({ saved: !!entry });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get all saved books for the user
export const getUserLibrary = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const library = await Library.find({ userId })
      .populate("bookId", "title coverImage description author category")
      .sort({ createdAt: -1 });

    res.json(library);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
