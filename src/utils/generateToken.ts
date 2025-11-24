import jwt from 'jsonwebtoken';
const generateToken=(id:string)=>jwt.sign({id},process.env.JWT_SECRET!,{expiresIn:'7d'});
export default generateToken;