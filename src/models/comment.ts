import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  chapterId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  content: string;
  parentId?: mongoose.Types.ObjectId | null;
  likes: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
      required: true
    } as any,

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    } as any,

    content: { type: String, required: true },

    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null
    } as any,

    likes: [{ type: Schema.Types.ObjectId, ref: "User" }] as any
  },
  { timestamps: true }
);

export default mongoose.model<IComment>("Comment", commentSchema);
