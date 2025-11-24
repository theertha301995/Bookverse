import express from "express";
import { rateBook, getBookRatings, getUserRating, } from "../controllers/ratingController.js";
import { authMiddleware } from "../../src/middleware/authMiddleware.js";
const router = express.Router();
router.get("/:bookId", getBookRatings);
router.get("/user/:bookId", authMiddleware, getUserRating);
router.post("/:bookId", authMiddleware, rateBook);
export default router;
//# sourceMappingURL=ratingRoutes.js.map