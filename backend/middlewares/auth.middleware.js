import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//the middleware checks if the user is logged in || not
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    })
  }

  const token = authHeader.split(" ")[1];
  try {

    //token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await userModel.findById(decoded._id)
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    })
  }
}