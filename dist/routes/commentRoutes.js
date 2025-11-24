import express from "express";
import { addComment, getComments, editComment, deleteComment, toggleLike } from "../controllers/commentController.js";
import { authMiddleware } from "../../src/middleware/authMiddleware.js";
const router = express.Router();
// Public: get comments
router.get("/:chapterId", getComments);
// Protected: actions
router.post("/:chapterId", authMiddleware, addComment);
router.patch("/edit/:commentId", authMiddleware, editComment);
router.delete("/:commentId", authMiddleware, deleteComment);
router.patch("/like/:commentId", authMiddleware, toggleLike);
export default router;
//# sourceMappingURL=commentRoutes.js.map