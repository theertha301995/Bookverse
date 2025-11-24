
import  { Request,Response } from "express";
import bcrypt from "bcryptjs";
import users from "../models/user.js";
import generateToken from "../utils/generateToken.js";

export const register = async(req:Request,res:Response)=>
{
    const{username,email,password,role}=req.body;
    const existing= await users.findOne({email});
    if(existing) return res.status(400).json({mressage:'User already exist'});
    const hashed=await bcrypt.hash(password,10);
    const user= await users.create({ username, email, password: hashed, role });
    res.status(201).json({
         _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id.toString())
    });
};
export const loginUser= async(req:Request,res:Response)=>
{
    const {email,password}=req.body;
    const user= await users.findOne({email});
    if(!user) return res.status(400).json({message:'Invalide response'});
    res.json({
         _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id.toString())
    });
};