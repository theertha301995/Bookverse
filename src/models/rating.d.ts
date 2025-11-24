import mongoose, { Document } from "mongoose";
export interface IRating extends Document {
    bookId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IRating, {}, {}, {}, mongoose.Document<unknown, {}, IRating, {}, {}> & IRating & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=rating.d.ts.map