import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { generateBookSummary, generateChapterSummary } from "../controllers/summaryController.js";
const router = express.Router();
// BOOK SUMMARY
router.get("/book/:bookId", authMiddleware, generateBookSummary);
// CHAPTER SUMMARY
router.get("/chapter/:chapterId", authMiddleware, generateChapterSummary);
export default router;
//# sourceMappingURL=SummaryRoutes.js.map