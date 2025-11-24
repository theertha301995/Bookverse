import { Request, Response } from "express";
import {
  getWritingSuggestions,
  improveSentence,
  continueStory,
} from "../services/writingAssistantService.js";

export const aiWritingSuggestions = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    const suggestions = await getWritingSuggestions(text);

    res.json({
      success: true,
      suggestions,
    });
  } catch (err) {
    console.error("AI Writing Suggestions Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate writing suggestions.",
    });
  }
};

export const aiImproveText = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    const improved = await improveSentence(text);

    res.json({
      success: true,
      improved,
    });
  } catch (err) {
    console.error("AI Improve Text Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to improve text.",
    });
  }
};

export const aiContinueStory = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Story text is required",
      });
    }

    const continuation = await continueStory(text);

    res.json({
      success: true,
      continuation,
    });
  } catch (err) {
    console.error("AI Continue Story Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to continue story.",
    });
  }
};
