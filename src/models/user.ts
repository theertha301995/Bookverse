import mongoose,{Schema,Document} from "mongoose";
export interface IUsers extends Document
{
    username:string;
    email:string;
    password:string;
    role:'author'|'reader'
    xp:number;
    badges:string[];
}
const userschema= new Schema<IUsers>(
    {
       username:{type:String,required:true},
       email: { type: String, required: true, unique: true },
       password: { type: String, required: true },
       role: { type: String, enum: ['author', 'reader'], default: 'reader' },
       xp: { type: Number, default: 0 },
       badges: [{ type: String }]
    }
);
export default mongoose.model("User", userschema);