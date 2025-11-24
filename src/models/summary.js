import mongoose from "mongoose";
const summarySchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    chapterId: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter", default: null },
    summaryText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Summary", summarySchema);
//# sourceMappingURL=summary.js.map