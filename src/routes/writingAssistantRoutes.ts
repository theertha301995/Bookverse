import express from "express";
import {authMiddleware} from "../middleware/authMiddleware.js";
import {
  aiWritingSuggestions,
  aiImproveText,
  aiContinueStory,
} from "../controllers/writingAssistentController.js"

const router = express.Router();

// Full writing suggestions
router.post("/suggestions", authMiddleware, aiWritingSuggestions);

// Improve text
router.post("/improve", authMiddleware, aiImproveText);

// Continue story
router.post("/continue", authMiddleware, aiContinueStory);

export default router;
