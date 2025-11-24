import Summary from "../models/summary.js";
import Book from "../models/book.js";
import Chapter from "../models/chapter.js";
import { generateAISummary } from "../utils/aiClient.js";
export const getBookSummary = async (bookId) => {
    // 1. Check cache
    let existing = await Summary.findOne({ bookId, chapterId: null });
    if (existing)
        return existing.summaryText;
    // 2. Fetch book content
    const book = await Book.findById(bookId);
    if (!book)
        throw new Error("Book not found");
    // Combine all chapters into one string
    const chapters = await Chapter.find({ bookId }).sort({ chapterNumber: 1 });
    const fullText = chapters.map(c => c.content).join("\n\n");
    if (!fullText)
        throw new Error("No content available.");
    // 3. Request AI summary
    const summary = await generateAISummary(fullText);
    // 4. Cache result
    await Summary.create({
        bookId,
        chapterId: null,
        summaryText: summary
    });
    return summary;
};
export const getChapterSummary = async (chapterId) => {
    // 1. Check cache
    let existing = await Summary.findOne({ chapterId });
    if (existing)
        return existing.summaryText;
    // 2. Fetch chapter content
    const chapter = await Chapter.findById(chapterId);
    if (!chapter)
        throw new Error("Chapter not found");
    const text = chapter.content;
    if (!text)
        throw new Error("Chapter is empty.");
    // 3. AI summary
    const summary = await generateAISummary(text);
    // 4. Cache result
    await Summary.create({
        bookId: chapter.bookId,
        chapterId,
        summaryText: summary
    });
    return summary;
};
//# sourceMappingURL=summaryService.js.map