import mongoose, { Schema, Document } from "mongoose";

export interface IReadingHistory extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  chapterId: mongoose.Types.ObjectId;
  progress: number; // e.g. percentage or scroll position
  updatedAt: Date;
}

const readingHistorySchema = new Schema<IReadingHistory>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    } as any,

    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    } as any,

    chapterId: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    } as any,

    progress: {
      type: Number,
      default: 0, // optional: frontend can send scroll percentage
    }
  },
  { timestamps: true }
);

// Ensure unique entry per user per book
readingHistorySchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.model<IReadingHistory>(
  "ReadingHistory",
  readingHistorySchema
);
