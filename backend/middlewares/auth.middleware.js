import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userModel } from '../models/userSchema.js';
dotenv.config();

//the middleware checks if the user is logged in || not
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(403).json({
      message: "Login to access this resource."
    });

    //token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await userModel.findById(decoded._id)
    next();

  } catch (error) {
    console.log(error.message);

    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    })
  }
}