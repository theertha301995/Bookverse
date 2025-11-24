// src/models/notification.ts
import mongoose, { Schema, Document } from "mongoose";

export type NotificationType =
  | "follow"
  | "new_chapter"
  | "comment"
  | "reply"
  | "mention"
  | "system";

export interface INotification extends Document {
  userId: mongoose.Types.ObjectId;    // recipient
  actorId?: mongoose.Types.ObjectId;  // who triggered it
  type: NotificationType;
  entityType?: string; // e.g. "Book" | "Chapter" | "Comment"
  entityId?: mongoose.Types.ObjectId;
  text?: string;
  metadata?: Record<string, any>;
  read: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true } as any,
    actorId: { type: Schema.Types.ObjectId, ref: "User" } as any,
    type: { type: String, enum: ["follow","new_chapter","comment","reply","mention","system"], required: true },
    entityType: String,
    entityId: { type: Schema.Types.ObjectId } as any,
    text: String,
    metadata: { type: Schema.Types.Mixed, default: {} },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

notificationSchema.index({ userId: 1, read: 1, createdAt: -1 });

export default mongoose.model<INotification>("Notification", notificationSchema);
