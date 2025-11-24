import mongoose, { Schema } from "mongoose";
const ratingSchema = new Schema({
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
}, { timestamps: true });
// ensure 1 rating per user per book
ratingSchema.index({ bookId: 1, userId: 1 }, { unique: true });
export default mongoose.model("Rating", ratingSchema);
//# sourceMappingURL=rating.js.map