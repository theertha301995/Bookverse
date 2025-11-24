import mongoose, { Schema, Document } from "mongoose";

export interface IReport extends Document {
  reporterId: mongoose.Types.ObjectId;
  targetType: "User" | "Book" | "Chapter" | "Comment";
  targetId: mongoose.Types.ObjectId;

  reason: string;
  details?: string;

  status: "Pending" | "Resolved" | "Dismissed";
  adminId?: mongoose.Types.ObjectId;
  adminNotes?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>(
  {
    reporterId: { type: Schema.Types.ObjectId, ref: "User", required: true } as any,

    targetType: { type: String, enum: ["User", "Book", "Chapter", "Comment"], required: true },
    targetId: { type: Schema.Types.ObjectId, required: true } as any,

    reason: { type: String, required: true },
    details: { type: String },

    status: { type: String, enum: ["Pending", "Resolved", "Dismissed"], default: "Pending" },

    adminId: { type: Schema.Types.ObjectId, ref: "User" } as any,
    adminNotes: { type: String },
  },
  { timestamps: true }
);

reportSchema.index({ targetId: 1, targetType: 1 });
reportSchema.index({ reporterId: 1 });

export default mongoose.model<IReport>("Report", reportSchema);
