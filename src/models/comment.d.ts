import mongoose, { Document } from "mongoose";
export interface IComment extends Document {
    chapterId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    content: string;
    parentId?: mongoose.Types.ObjectId | null;
    likes: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IComment, {}, {}, {}, mongoose.Document<unknown, {}, IComment, {}, {}> & IComment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=comment.d.ts.map