import mongoose, { Schema } from "mongoose";
const analyticsSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    views: { type: Number, default: 0 },
    reads: { type: Number, default: 0 },
    completions: { type: Number, default: 0 },
    dailyReads: [
        {
            date: { type: String },
            count: { type: Number, default: 0 },
        },
    ],
}, { timestamps: true });
export default mongoose.model("Analytics", analyticsSchema);
//# sourceMappingURL=analytics.js.map