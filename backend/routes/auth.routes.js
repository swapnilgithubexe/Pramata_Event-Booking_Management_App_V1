import express from 'express';
import asyncWrapper from '../utils/asyncWrapper.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { fetchUser, loginUser, registerUser } from '../controllers/auth.controller.js';

const authRouter = express.Router();

//routes
authRouter.post("/register-user", asyncWrapper(registerUser));
authRouter.post("/login", asyncWrapper(loginUser))
authRouter.get("/user/me", authMiddleware, fetchUser);


export default authRouter;