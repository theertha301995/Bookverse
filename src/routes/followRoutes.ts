import express from "express";
import {
  followAuthor,
  unfollowAuthor,
  isFollowing,
  getFollowingList,
  getFollowers
} from "../../src/controllers/followerController.js"

import { authMiddleware } from "../../src/middleware/authMiddleware.js"

const router = express.Router();

router.post("/follow/:authorId", authMiddleware, followAuthor);
router.delete("/unfollow/:authorId", authMiddleware, unfollowAuthor);
router.get("/status/:authorId", authMiddleware, isFollowing);

router.get("/following", authMiddleware, getFollowingList);
router.get("/followers/:authorId", authMiddleware, getFollowers);

export default router;
