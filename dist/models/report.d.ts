import mongoose, { Document } from "mongoose";
export interface IReport extends Document {
    reporterId: mongoose.Types.ObjectId;
    targetType: "User" | "Book" | "Chapter" | "Comment";
    targetId: mongoose.Types.ObjectId;
    reason: string;
    details?: string;
    status: "Pending" | "Resolved" | "Dismissed";
    adminId?: mongoose.Types.ObjectId;
    adminNotes?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IReport, {}, {}, {}, mongoose.Document<unknown, {}, IReport, {}, {}> & IReport & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=report.d.ts.map