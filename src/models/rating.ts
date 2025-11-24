import mongoose, { Schema, Document } from "mongoose";

export interface IRating extends Document {
  bookId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const ratingSchema = new Schema<IRating>(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    } as any,

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    } as any,

    rating: { type: Number, min: 1, max: 5, required: true },
  },
  { timestamps: true }
);

// ensure 1 rating per user per book
ratingSchema.index({ bookId: 1, userId: 1 }, { unique: true });

export default mongoose.model<IRating>("Rating", ratingSchema);
