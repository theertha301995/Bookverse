import mongoose, { Schema } from "mongoose";
const librarySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    }
}, { timestamps: true });
// Prevent duplicates (1 user cannot save the same book twice)
librarySchema.index({ userId: 1, bookId: 1 }, { unique: true });
export default mongoose.model("Library", librarySchema);
//# sourceMappingURL=library.js.map