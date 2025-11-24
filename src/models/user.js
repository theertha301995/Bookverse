import mongoose, { Schema } from "mongoose";
const userschema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['author', 'reader'], default: 'reader' },
    xp: { type: Number, default: 0 },
    badges: [{ type: String }]
});
export default mongoose.model("User", userschema);
//# sourceMappingURL=user.js.map