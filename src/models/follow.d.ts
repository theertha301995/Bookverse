import mongoose, { Document } from "mongoose";
export interface IFollow extends Document {
    followerId: mongoose.Types.ObjectId;
    authorId: mongoose.Types.ObjectId;
    createdAt: Date;
}
declare const _default: mongoose.Model<IFollow, {}, {}, {}, mongoose.Document<unknown, {}, IFollow, {}, {}> & IFollow & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=follow.d.ts.map