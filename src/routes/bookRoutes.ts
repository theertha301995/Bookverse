import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getBooksByAuthor,
} from "../../src/controllers/bookController.js";

import { authMiddleware } from "../../src/middleware/authMiddleware.js";

const router = Router();

// Public (read)
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/author/:authorId", getBooksByAuthor);

// Private (write)
router.post("/", authMiddleware, createBook);
router.patch("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

export default router;
