import express from "express";
import { register,loginUser } from "../controllers/authController.js";
const authRouter=express.Router();
authRouter.post('/register',register);
authRouter.post('/login',loginUser);

export default authRouter;