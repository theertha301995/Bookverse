import express from "express";
import { addToLibrary, removeFromLibrary, checkLibraryStatus, getUserLibrary, } from "../controllers/libraryController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/add/:bookId", authMiddleware, addToLibrary);
router.delete("/remove/:bookId", authMiddleware, removeFromLibrary);
router.get("/status/:bookId", authMiddleware, checkLibraryStatus);
router.get("/my-library", authMiddleware, getUserLibrary);
export default router;
//# sourceMappingURL=libraryRoutes.js.map