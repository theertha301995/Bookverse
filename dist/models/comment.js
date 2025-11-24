import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
    chapterId: {
        type: Schema.Types.ObjectId,
        ref: "Chapter",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: { type: String, required: true },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: null
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
export default mongoose.model("Comment", commentSchema);
//# sourceMappingURL=comment.js.map