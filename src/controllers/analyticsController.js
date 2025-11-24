import Analytics from "../models/analytics.js";
export const getBookAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.findOne({ bookId: req.params.bookId });
        if (!analytics)
            return res.status(404).json({ message: "Analytics not found" });
        res.json(analytics);
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
export const getTopBooks = async (req, res) => {
    try {
        const top = await Analytics.find()
            .sort({ reads: -1 })
            .limit(10)
            .populate("bookId", "title coverImage");
        res.json(top);
    }
    catch {
        res.status(500).json({ message: "Server error" });
    }
};
//# sourceMappingURL=analyticsController.js.map