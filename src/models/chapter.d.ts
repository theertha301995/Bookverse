import mongoose, { Document } from "mongoose";
export interface IChapter extends Document {
    bookId: mongoose.Types.ObjectId;
    title: string;
    content: string;
    order: number;
    isPublished: boolean;
}
declare const _default: mongoose.Model<IChapter, {}, {}, {}, mongoose.Document<unknown, {}, IChapter, {}, {}> & IChapter & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=chapter.d.ts.map