import { userModel } from "../models/userSchema.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

//register end point
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  //api level validation
  if (!name || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please fill all the fields"
    })
  }

  //check if the user exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) return res.status(400).json({
    success: false,
    message: "User already exists"
  });

  const user = await userModel.create({
    name, email, password, role: role || "attendee"
  });

  //created a jwt auth token
  const token = generateToken(user._id);

  //not sending the pass
  const userobj = user.toObject();
  delete userobj.password;

  res.status(201).json({
    success: true,
    message: "User created",
    user: userobj,
    token: token
  })
}

//login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //find the user
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) return res.status(400).json({
    success: false,
    message: "User not found, Please register!"
  })

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      success: false,
      message: "Password did not match, try again"
    })
  }
  const token = generateToken(user._id);
  res.status(200).json({
    success: true,
    message: `Welcome! ${user.name}`,
    token: token,
    user: user
  })
}