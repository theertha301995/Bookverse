import mongoose, { Schema, Document } from "mongoose";

export interface ILibrary extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const librarySchema = new Schema<ILibrary>(
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
    } as any
  },
  { timestamps: true }
);

// Prevent duplicates (1 user cannot save the same book twice)
librarySchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.model<ILibrary>("Library", librarySchema);
