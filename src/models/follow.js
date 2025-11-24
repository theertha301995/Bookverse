import mongoose, { Schema } from "mongoose";
const followSchema = new Schema({
    followerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });
// Prevent duplicate follows
followSchema.index({ followerId: 1, authorId: 1 }, { unique: true });
export default mongoose.model("Follow", followSchema);
//# sourceMappingURL=follow.js.map