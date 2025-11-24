import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    status: "pending" | "reviewed" | "dismissed";
    reporterId: mongoose.Types.ObjectId;
    targetType: "comment" | "user" | "book";
    targetId: mongoose.Types.ObjectId;
    reason?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=report.d.ts.map