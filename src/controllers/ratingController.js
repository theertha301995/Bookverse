import Rating from "../models/rating.js";
import Book from "../models/book.js";
// Add or update rating
export const rateBook = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { rating } = req.body;
        const userId = req.user?.id;
        if (!rating || rating < 1 || rating > 5)
            return res.status(400).json({ message: "Rating must be between 1–5" });
        const book = await Book.findById(bookId);
        if (!book)
            return res.status(404).json({ message: "Book not found" });
        // upsert → update if exists, create if not
        const rated = await Rating.findOneAndUpdate({ bookId, userId }, { rating }, { new: true, upsert: true });
        res.json(rated);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get all ratings + average score
export const getBookRatings = async (req, res) => {
    try {
        const { bookId } = req.params;
        const ratings = await Rating.find({ bookId });
        const average = ratings.reduce((sum, r) => sum + r.rating, 0) /
            (ratings.length || 1);
        res.json({
            count: ratings.length,
            average: Number(average.toFixed(2)),
            ratings,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get current user's rating (if any)
export const getUserRating = async (req, res) => {
    try {
        const { bookId } = req.params;
        const userId = req.user?.id;
        const rating = await Rating.findOne({ bookId, userId });
        res.json(rating || { rating: null });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=ratingController.js.map