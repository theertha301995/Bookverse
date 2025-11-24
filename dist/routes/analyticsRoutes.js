import { Router } from "express";
import { getBookAnalytics, getTopBooks } from "../controllers/analyticsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = Router();
router.get("/book/:bookId", authMiddleware, getBookAnalytics);
router.get("/top", getTopBooks);
export default router;
//# sourceMappingURL=analyticsRoutes.js.map