import mongoose, { Document } from 'mongoose';
export interface IBooks extends Document {
    title: string;
    description: string;
    genre: string;
    category: string;
    tags: string[];
    status: "draft" | "published";
    coverImage?: string;
    author: mongoose.Schema.Types.ObjectId;
    published: boolean;
    createdAt: Date;
    averageRating: number;
    totalReads: number;
}
declare const _default: mongoose.Model<IBooks, {}, {}, {}, mongoose.Document<unknown, {}, IBooks, {}, {}> & IBooks & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=book.d.ts.map