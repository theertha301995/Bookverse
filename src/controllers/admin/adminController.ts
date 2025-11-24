// controllers/adminController.ts

import User from "../../models/admin/user.js"
import Book from "../../models/admin/book.js";
import Report from "../../models/admin/report.js"
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().populate("authorId", "username");
    res.json(books);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
export const updateBookStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body; // approved/rejected
    await Book.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Book status updated" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
export const getReports = async (req: Request, res: Response) => {
  try {
    const reports = await Report.find()
      .populate("reporterId", "username")
      .lean();

    res.json(reports);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
export const reviewReport = async (req: Request, res: Response) => {
  try {
    await Report.findByIdAndUpdate(req.params.id, { status: "reviewed" });
    res.json({ message: "Report marked as reviewed" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
