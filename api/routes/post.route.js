import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createPost } from "../controller/create.controller.js";

const postRouter = Router();

postRouter.post('/create', verifyToken, createPost)

export default postRouter;
