import mongoose, { Document } from "mongoose";
export interface ILibrary extends Document {
    userId: mongoose.Types.ObjectId;
    bookId: mongoose.Types.ObjectId;
    createdAt: Date;
}
declare const _default: mongoose.Model<ILibrary, {}, {}, {}, mongoose.Document<unknown, {}, ILibrary, {}, {}> & ILibrary & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=library.d.ts.map