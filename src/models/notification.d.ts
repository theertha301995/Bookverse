import mongoose, { Document } from "mongoose";
export type NotificationType = "follow" | "new_chapter" | "comment" | "reply" | "mention" | "system";
export interface INotification extends Document {
    userId: mongoose.Types.ObjectId;
    actorId?: mongoose.Types.ObjectId;
    type: NotificationType;
    entityType?: string;
    entityId?: mongoose.Types.ObjectId;
    text?: string;
    metadata?: Record<string, any>;
    read: boolean;
    createdAt: Date;
}
declare const _default: mongoose.Model<INotification, {}, {}, {}, mongoose.Document<unknown, {}, INotification, {}, {}> & INotification & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=notification.d.ts.map