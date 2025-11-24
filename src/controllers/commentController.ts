import { Request, Response } from "express";
import Comment from "../models/comment.js";
import Chapter from "../models/chapter.js";
import Book from "../models/book.js";

// Add comment
export const addComment = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;
    const { content, parentId } = req.body;

    const chapter = await Chapter.findById(chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    const comment = await Comment.create({
      chapterId,
      userId: req.user?.id,
      content,
      parentId: parentId || null
    });

    res.status(201).json(comment);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get all comments for a chapter (threaded)
export const getComments = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;

    const comments = await Comment.find({ chapterId })
      .populate("userId", "username")
      .sort({ createdAt: 1 });

    res.json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Edit comment (only owner)
export const editComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Not found" });

    if (comment.userId.toString() !== req.user?.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    comment.content = req.body.content;
    await comment.save();

    res.json(comment);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Delete comment (owner or author of the book)
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Not found" });

    const chapter = await Chapter.findById(comment.chapterId);
    const book = await Book.findById(chapter?.bookId);

    const isOwner = comment.userId.toString() === req.user?.id;
    const isAuthor = book?.author.toString() === req.user?.id;

    if (!isOwner && !isAuthor) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await Comment.findByIdAndDelete(commentId);
    res.json({ message: "Comment deleted" });

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Like & Unlike comment
export const toggleLike = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const userId = req.user?.id;

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Not found" });

    const alreadyLiked = comment.likes.includes(userId as any);

    if (alreadyLiked) {
      comment.likes = comment.likes.filter(
        (id) => id.toString() !== userId
      );
    } else {
      comment.likes.push(userId as any);
    }

    await comment.save();

    res.json(comment);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
