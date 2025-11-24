// models/Book.ts
import mongoose, { Schema } from "mongoose";
const BookSchema = new Schema({
    title: String,
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "approved" },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Book", BookSchema);
//# sourceMappingURL=book.js.map