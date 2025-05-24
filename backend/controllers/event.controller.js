import { eventModel } from "../models/eventschema.js";
import { userModel } from "../models/userSchema.js";

//event creation
export const createEvent = async (req, res) => {
  const { title, description, eventImage, date, location, maxAttendees, category, availableSeats } = req.body;

  //api level validator
  if (!title || !date || !location || !maxAttendees, !category) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the field details"
    })
  }

  const event = await eventModel.create({
    title, description, eventImage, date, location, maxAttendees, category, organizer: req.user._id, availableSeats
  })

  res.status(201).json({
    message: "Event created successfully",
    eventDetails: event
  })
}

//retreive all events for a single organizer
export const getAllEvents = async (req, res) => {
  const events = await eventModel.findById(req.params.id);
  if (!events) return res.status(400).json({
    success: false,
    message: "No events found"
  })
  res.status(200).json({
    success: true,
    events: events
  })
}

//single event details
export const getSingleEvent = async (req, res) => {
  const { eventId } = req.params;
  const event = await eventModel.findById(eventId).populate("organizer", "name email");
  if (!event) return res.status(400).json({
    success: false,
    message: "No events found"
  })

  res.status(200).json({
    success: true,
    message: "Events found",
    event: event
  })
}

//search and filter based on category
export const filteredEvents = async (req, res) => {
  try {
    const { title, date, category, organizerName } = req.query;

    //filter object
    const filterQuery = {};

    if (title) {
      filterQuery.title = { $regex: title }
      //can also use options operator to match case sensitive searches
    }

    if (date) {
      filter.date = new Date(date)
    }

    if (category) {
      filter.category = category;
    }

    if (organizerName) {
      //serach by name first and later using id if found
      const organizer = await userModel.findOne({
        name: { $regex: organizerName, $options: "i" }
      });
      if (organizer) {
        filter.organizer = organizer._id
      } else {
        return res.status(200).json({
          success: true,
          data: []
        })
      }
    }

    const events = await eventModel.find(filter).populate("organizer", "name email");

    res.status(200).json({
      success: true,
      data: events
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to filter events",
      error: error.message
    })
  }
}

//get all attendees
export const getEventAttendees = async (req, res) => {
  const { eventId } = req.params;
  const event = await eventModel.findById(eventId).populate("attendees.user", "name email");

  if (!event) {
    return res.status(404).json({
      success: false,
      message: "Event not found"
    })
  }

  res.status(200).json({
    success: true,
    attendees
  })
}