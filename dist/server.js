import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => res.send("Bookverse api running"));
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Mongodb connected")).catch((err) => console.error(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=server.js.map