import mongoose, { Document } from "mongoose";
export interface IReadingHistory extends Document {
    userId: mongoose.Types.ObjectId;
    bookId: mongoose.Types.ObjectId;
    chapterId: mongoose.Types.ObjectId;
    progress: number;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IReadingHistory, {}, {}, {}, mongoose.Document<unknown, {}, IReadingHistory, {}, {}> & IReadingHistory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=readingHistory.d.ts.map