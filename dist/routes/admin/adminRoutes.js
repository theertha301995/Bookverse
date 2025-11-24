import { Router } from "express";
import { adminAuth } from "../../middleware/adminAuth.js";
import { getAllUsers, deleteUser, getAllBooks, updateBookStatus, getReports, reviewReport } from "../../controllers/admin/adminController.js";
const router = Router();
// USERS
router.get("/users", adminAuth, getAllUsers);
router.delete("/users/:id", adminAuth, deleteUser);
// BOOKS
router.get("/books", adminAuth, getAllBooks);
router.patch("/books/:id/status", adminAuth, updateBookStatus);
// REPORTS
router.get("/reports", adminAuth, getReports);
router.patch("/reports/:id", adminAuth, reviewReport);
export default router;
//# sourceMappingURL=adminRoutes.js.map