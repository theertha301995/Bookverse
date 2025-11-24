import mongoose, { Schema, Document } from "mongoose";

export interface IFollow extends Document {
  followerId: mongoose.Types.ObjectId; // user who follows
  authorId: mongoose.Types.ObjectId;   // author being followed
  createdAt: Date;
}

const followSchema = new Schema<IFollow>(
  {
    followerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    } as any,

    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    } as any
  },
  { timestamps: true }
);

// Prevent duplicate follows
followSchema.index({ followerId: 1, authorId: 1 }, { unique: true });

export default mongoose.model<IFollow>("Follow", followSchema);
