import mongoose, { Document } from "mongoose";
export interface IAnalytics extends Document {
    bookId: mongoose.Types.ObjectId;
    views: number;
    reads: number;
    completions: number;
    dailyReads: {
        date: string;
        count: number;
    }[];
}
declare const _default: mongoose.Model<IAnalytics, {}, {}, {}, mongoose.Document<unknown, {}, IAnalytics, {}, {}> & IAnalytics & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=analytics.d.ts.map