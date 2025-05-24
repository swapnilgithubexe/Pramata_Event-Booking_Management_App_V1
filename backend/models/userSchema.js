import mongoose from "mongoose";
import bcrypt from "bcryptjs";


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

//saving the hashed password
userSchema.pre("save", async function (next) {
  //check made if the user is updated but not the pass
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);

  //set the hashed pass
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

export const userModel = mongoose.model("User", userSchema);