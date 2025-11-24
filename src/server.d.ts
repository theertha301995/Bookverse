import mongoose from "mongoose";
export declare const sendNotification: (payload: {
    userId: string;
    actorId?: string;
    type: string;
    entityType?: string;
    entityId?: string;
    text?: string;
    metadata?: Record<string, any>;
}) => Promise<mongoose.Document<unknown, {}, import("./models/notification.js").INotification, {}, {}> & import("./models/notification.js").INotification & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=server.d.ts.map