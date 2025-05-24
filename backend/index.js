import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './utils/database.js';
import cors from "cors";
import authRouter from './routes/auth.routes.js';
import eventRouter from './routes/event.routes.js';

//dot env setup
dotenv.config();
const port = process.env.PORT;

const server = express();

//middlewares
server.use(express.json());
server.use(cors());

server.use("/api/auth/v1/", authRouter);
server.use("/api/v1/event/", eventRouter);


server.listen(port, () => {
  console.log(`Server started and running on PORT ${port}`);
  connectDB()
})