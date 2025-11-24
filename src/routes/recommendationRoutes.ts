import express from "express";
import { recommendBooks } from "../controllers/recommendationController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/recommendations/:userId
router.get("/:userId", authMiddleware, recommendBooks);

export default router;
