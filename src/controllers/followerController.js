import Follow from "../models/follow.js";
import User from "../models/user.js";
// Follow an author
export const followAuthor = async (req, res) => {
    try {
        const followerId = req.user?.id;
        const { authorId } = req.params;
        if (followerId === authorId)
            return res.status(400).json({ message: "You cannot follow yourself" });
        const author = await User.findById(authorId);
        if (!author)
            return res.status(404).json({ message: "Author not found" });
        const follow = await Follow.findOneAndUpdate({ followerId, authorId }, {}, { upsert: true, new: true });
        res.json({ message: "Author followed", follow });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Unfollow an author
export const unfollowAuthor = async (req, res) => {
    try {
        const followerId = req.user?.id;
        const { authorId } = req.params;
        await Follow.findOneAndDelete({ followerId, authorId });
        res.json({ message: "Author unfollowed" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Check if user follows author
export const isFollowing = async (req, res) => {
    try {
        const followerId = req.user?.id;
        const { authorId } = req.params;
        const follow = await Follow.findOne({ followerId, authorId });
        res.json({ following: !!follow });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// List of authors user follows
export const getFollowingList = async (req, res) => {
    try {
        const userId = req.user?.id;
        const following = await Follow.find({ followerId: userId })
            .populate("authorId", "username email bio profileImage")
            .sort({ createdAt: -1 });
        res.json(following);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// List of followers for an author
export const getFollowers = async (req, res) => {
    try {
        const { authorId } = req.params;
        const followers = await Follow.find({ authorId })
            .populate("followerId", "username email profileImage")
            .sort({ createdAt: -1 });
        res.json(followers);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=followerController.js.map