import mongoose, { Schema, Document } from "mongoose";

export interface IAnalytics extends Document {
  bookId: mongoose.Types.ObjectId;
  views: number;
  reads: number;
  completions: number;
  dailyReads: { date: string; count: number }[];
}

const analyticsSchema = new Schema<IAnalytics>(
  {
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
  },
  { timestamps: true }
);

export default mongoose.model<IAnalytics>("Analytics", analyticsSchema);
