import mongoose,{Schema,Document} from 'mongoose';
export interface IBooks extends Document
{
  title: string;
  description: string;
  genre: string;
  category:string;
  tags:string[];
  status:"draft"|"published";
  coverImage?: string;
  author: mongoose.Schema.Types.ObjectId;
  published: boolean;
  createdAt: Date;
  averageRating:number;
  totalReads:number;
  views:number;
}
const bookschema= new Schema<IBooks>({
     title: { type: String, required: true },
  description: String,
  genre: String,
  category:String,
  status:
  {
    type:String,
    enum:["draft","published"],
    default:"draft"
  },
  tags:{type:[String],required:true},
  coverImage: String,
  totalReads:{type:Number,default:0},
  averageRating:{type:Number,default:0},
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  published: { type: Boolean, default: false },
  views: {
  type: Number,
  default: 0,
},
  createdAt: { type: Date, default: Date.now }
},{timestamps:true});
export default mongoose.model<IBooks>('book',bookschema);

