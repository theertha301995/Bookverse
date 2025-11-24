import mongoose, { Schema, Document } from "mongoose";

export interface IChapter extends Document {
  bookId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  order: number;
  isPublished: boolean;
}

const chapterSchema = new Schema<IChapter>(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    } as any, // FIX: avoid strict typing conflict

    title: { type: String, required: true },
    content: { type: String, required: true },

    order: { type: Number, default: 1 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IChapter>("Chapter", chapterSchema);
