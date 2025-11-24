import mongoose, { Schema } from "mongoose";
const reportSchema = new Schema({
    reporterId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetType: { type: String, enum: ["User", "Book", "Chapter", "Comment"], required: true },
    targetId: { type: Schema.Types.ObjectId, required: true },
    reason: { type: String, required: true },
    details: { type: String },
    status: { type: String, enum: ["Pending", "Resolved", "Dismissed"], default: "Pending" },
    adminId: { type: Schema.Types.ObjectId, ref: "User" },
    adminNotes: { type: String },
}, { timestamps: true });
reportSchema.index({ targetId: 1, targetType: 1 });
reportSchema.index({ reporterId: 1 });
export default mongoose.model("Report", reportSchema);
//# sourceMappingURL=report.js.map