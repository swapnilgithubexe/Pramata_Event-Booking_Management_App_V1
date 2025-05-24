import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String, required: [true, "Name is required"]
  },
  email: {
    type: String, required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false
  },
  role: {
    type: String,
    enum: ["attendee", 'organizer'],
    default: 'attendee'
  },

}, {
  timestamps: true
});

export const userModel = mongoose.model("User", userSchema);