import { Request, Response } from "express";
import { getBookSummary, getChapterSummary } from "../services/summaryService.js";

export const generateBookSummary = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId as string;

    const summary = await getBookSummary(bookId);

    res.json({
      success: true,
      summary
    });
  } catch (err) {
    console.error("AI Summary Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate summary."
    });
  }
};

export const generateChapterSummary = async (req: Request, res: Response) => {
  try {
    const chapterId = req.params.chapterId as string;

    const summary = await getChapterSummary(chapterId);

    res.json({
      success: true,
      summary
    });
  } catch (err) {
    console.error("AI Summary Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate summary."
    });
  }
};
