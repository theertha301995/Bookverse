// src/models/notification.ts
import mongoose, { Schema } from "mongoose";
const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actorId: { type: Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["follow", "new_chapter", "comment", "reply", "mention", "system"], required: true },
    entityType: String,
    entityId: { type: Schema.Types.ObjectId },
    text: String,
    metadata: { type: Schema.Types.Mixed, default: {} },
    read: { type: Boolean, default: false },
}, { timestamps: true });
notificationSchema.index({ userId: 1, read: 1, createdAt: -1 });
export default mongoose.model("Notification", notificationSchema);
//# sourceMappingURL=notification.js.map