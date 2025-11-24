import mongoose from "mongoose";
const recommendationCacheSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recommendations: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Book" }
    ],
    updatedAt: { type: Date, default: Date.now }
});
export default mongoose.model("RecommendationCache", recommendationCacheSchema);
//# sourceMappingURL=recommendationCache.js.map