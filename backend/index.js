import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './utils/database.js';
import cors from "cors";

//dot env setup
dotenv.config();
const port = process.env.PORT;

const server = express();

//middlewares
server.use(express.json());
server.use(cors());

server.listen(port, () => {
  console.log(`Server started and running on PORT ${port}`);
  connectDB()
})