// models/Report.ts
import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema({
  reporterId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  targetType: { type: String, enum: ["book", "comment", "user"], required: true },
  targetId: { type: Schema.Types.ObjectId, required: true },
  reason: String,
  status: { type: String, enum: ["pending", "reviewed", "dismissed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Report", ReportSchema);
