import Book from "../models/book.js";
import ReadingHistory from "../models/readingHistory.js";
import Analytics from "../models/analytics.js";
import RecommendationCache from "../models/recommendationCache.js";
export const getAIRecommendations = async (userId) => {
    // ----- CACHE CHECK -----
    const cached = await RecommendationCache.findOne({ userId });
    if (cached) {
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - cached.updatedAt.getTime() < oneHour) {
            return await Book.find({ _id: { $in: cached.recommendations } }).limit(20);
        }
    }
    // ----- 1. GET USER HISTORY -----
    const history = await ReadingHistory.find({ userId }).sort({ lastReadAt: -1 });
    const recentBookIds = history.map(h => h.bookId).slice(0, 10);
    // If no history → trending books
    if (recentBookIds.length === 0) {
        const trending = await getTrendingBooks();
        await saveCache(userId, trending.map(b => b._id));
        return trending;
    }
    const recentBooks = await Book.find({ _id: { $in: recentBookIds } });
    // Extract genres
    const genres = recentBooks.flatMap(b => b.genre || []);
    // ----- 2. CONTENT BASED -----
    const similarBooks = await Book.find({
        genres: { $in: genres },
        _id: { $nin: recentBookIds }
    }).limit(20);
    // ----- 3. COLLABORATIVE FILTERING -----
    const similarUsers = await ReadingHistory.find({
        bookId: { $in: recentBookIds },
        userId: { $ne: userId }
    });
    const similarUserIds = [...new Set(similarUsers.map(u => u.userId.toString()))];
    const collaborativeBooks = await ReadingHistory.find({
        userId: { $in: similarUserIds }
    }).limit(20);
    const collaborativeBookIds = collaborativeBooks.map(c => c.bookId);
    // ----- 4. TRENDING BOOKS -----
    const trending = await getTrendingBooks();
    // ----- 5. COMBINE ALL -----
    const combined = [
        ...similarBooks.map(b => b._id.toString()),
        ...collaborativeBookIds.map(id => id.toString()),
        ...trending.map(t => t._id.toString())
    ];
    const unique = [...new Set(combined)];
    const finalBooks = await Book.find({ _id: { $in: unique } }).limit(20);
    // ----- SAVE CACHE -----
    await saveCache(userId, unique);
    return finalBooks;
};
// Save cached recommendation
const saveCache = async (userId, bookIds) => {
    await RecommendationCache.findOneAndUpdate({ userId }, { recommendations: bookIds, updatedAt: new Date() }, { upsert: true });
};
// Get trending books from analytics
const getTrendingBooks = async () => {
    const analytics = await Analytics.find().sort({ reads: -1 }).limit(20);
    const ids = analytics.map(a => a.bookId);
    return await Book.find({ _id: { $in: ids } });
};
//# sourceMappingURL=recommendationServices.js.map