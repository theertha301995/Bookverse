import express from "express";
import { updateReadingHistory, getContinueReading, getLastReadChapter, } from "../../src/controllers/readingHistory.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/update", authMiddleware, updateReadingHistory);
router.get("/continue", authMiddleware, getContinueReading);
router.get("/last/:bookId", authMiddleware, getLastReadChapter);
export default router;
//# sourceMappingURL=readingHistoryRoutes.js.map