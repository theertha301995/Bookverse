import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    status: "pending" | "approved" | "rejected";
    title?: string | null;
    authorId?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=book.d.ts.map