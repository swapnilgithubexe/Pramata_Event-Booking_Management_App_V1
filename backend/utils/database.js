import mongoose from "mongoose";
import dotenv from 'dotenv';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database Connection Successful");

  } catch (error) {
    console.log(error.message);

  }
}