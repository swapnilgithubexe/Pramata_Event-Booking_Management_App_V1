import express from 'express';
import { createEvent, filteredEvents, getAllEvents, getSingleEvent } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post("/create-new-event", createEvent);
eventRouter.get("/:id", getAllEvents);
eventRouter.get("/:eventId", getSingleEvent);
eventRouter.get("/filter", filteredEvents);


export default eventRouter;