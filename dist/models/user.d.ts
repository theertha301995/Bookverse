import mongoose, { Document } from "mongoose";
export interface IUsers extends Document {
    username: string;
    email: string;
    password: string;
    role: 'author' | 'reader';
    xp: number;
    badges: string[];
}
declare const _default: mongoose.Model<IUsers, {}, {}, {}, mongoose.Document<unknown, {}, IUsers, {}, mongoose.DefaultSchemaOptions> & IUsers & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, mongoose.Schema<IUsers, mongoose.Model<IUsers, any, any, any, mongoose.Document<unknown, any, IUsers, any, {}> & IUsers & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUsers, mongoose.Document<unknown, {}, mongoose.FlatRecord<IUsers>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IUsers> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=user.d.ts.map