import express from "express";
import { createReport, getAllReports, handleReport } from "../controllers/reportController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { adminMiddleware } from "../middleware/adminMiddleware.js"

const router = express.Router();

// user creates report
router.post("/", authMiddleware, createReport);

// admin views reports
router.get("/", authMiddleware, adminMiddleware, getAllReports);

// admin handles reports
router.patch("/:id", authMiddleware, adminMiddleware, handleReport);

export default router;
