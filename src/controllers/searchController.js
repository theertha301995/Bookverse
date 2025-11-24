import Book from "../models/book.js";
export const searchBooks = async (req, res) => {
    try {
        const { keyword, category, status, tags, sort, page = 1, limit = 20, } = req.query;
        const query = {};
        // Text search
        if (keyword) {
            query.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { author: { $regex: keyword, $options: "i" } },
            ];
        }
        // Category filter
        if (category) {
            query.category = category;
        }
        // Status filter
        if (status) {
            query.status = status;
        }
        // Tags filter (supports multiple)
        if (tags) {
            const tagArray = tags.split(",");
            query.tags = { $in: tagArray };
        }
        // Sorting system
        const sortOptions = {
            newest: { createdAt: -1 },
            oldest: { createdAt: 1 },
            popular: { views: -1 },
            topRated: { averageRating: -1 },
            aToZ: { title: 1 },
            zToA: { title: -1 },
        };
        const sortQuery = sortOptions[sort] || { createdAt: -1 };
        // Pagination
        const skip = (Number(page) - 1) * Number(limit);
        const books = await Book.find(query)
            .sort(sortQuery)
            .skip(skip)
            .limit(Number(limit));
        const totalBooks = await Book.countDocuments(query);
        const totalPages = Math.ceil(totalBooks / Number(limit));
        res.json({
            page: Number(page),
            totalPages,
            totalBooks,
            results: books,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=searchController.js.map