import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String, required: [true, "title is required"]
  },
  description: {
    type: String,
    required: [true, 'Desc is required']
  },
  eventImage: {
    type: String,
    required: [true, "Please provide a image for the event"]
  },
  date: {
    type: Date, required: [true, "Please enter a date"]
  },
  location: {
    type: String,
    required: [true, "Please enter a location"]
  },
  maxAttendees: Number,
  category: {
    type: String,
    enum: ["Music", "Party", "Tech", "Ed Workshop"]
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Organizer is required"]
  },
  attendees: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
      },
      attendedStatus: {
        type: Boolean, default: false
      }
    }
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      rating: {
        type: Number,
        min: 1,
        max: 5
      },
      comment: String
    }
  ],
  availableSeats: {
    type: Number,
    min: 1,
    max: 1000
  }

}, {
  timestamps: true
});

export const eventModel = mongoose.model("Event", eventSchema);