import mongoose, { Schema } from "mongoose";
const readingHistorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    chapterId: {
        type: Schema.Types.ObjectId,
        ref: "Chapter",
        required: true,
    },
    progress: {
        type: Number,
        default: 0, // optional: frontend can send scroll percentage
    }
}, { timestamps: true });
// Ensure unique entry per user per book
readingHistorySchema.index({ userId: 1, bookId: 1 }, { unique: true });
export default mongoose.model("ReadingHistory", readingHistorySchema);
//# sourceMappingURL=readingHistory.js.map