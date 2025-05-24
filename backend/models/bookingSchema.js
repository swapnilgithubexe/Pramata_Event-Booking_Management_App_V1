import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"]
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },
  bookedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const bookingModel = mongoose.model("Booking", bookingSchema);