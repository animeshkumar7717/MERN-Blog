import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createPost, getPost } from "../controller/create.controller.js";

const postRouter = Router();

postRouter.post('/create', verifyToken, createPost)
postRouter.get('/getposts', getPost)

export default postRouter;
