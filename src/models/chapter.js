import mongoose, { Schema } from "mongoose";
const chapterSchema = new Schema({
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    }, // FIX: avoid strict typing conflict
    title: { type: String, required: true },
    content: { type: String, required: true },
    order: { type: Number, default: 1 },
    isPublished: { type: Boolean, default: false },
}, { timestamps: true });
export default mongoose.model("Chapter", chapterSchema);
//# sourceMappingURL=chapter.js.map