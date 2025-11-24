import { getBookSummary, getChapterSummary } from "../services/summaryService.js";
export const generateBookSummary = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const summary = await getBookSummary(bookId);
        res.json({
            success: true,
            summary
        });
    }
    catch (err) {
        console.error("AI Summary Error:", err);
        res.status(500).json({
            success: false,
            message: "Failed to generate summary."
        });
    }
};
export const generateChapterSummary = async (req, res) => {
    try {
        const chapterId = req.params.chapterId;
        const summary = await getChapterSummary(chapterId);
        res.json({
            success: true,
            summary
        });
    }
    catch (err) {
        console.error("AI Summary Error:", err);
        res.status(500).json({
            success: false,
            message: "Failed to generate summary."
        });
    }
};
//# sourceMappingURL=summaryController.js.map