import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createPost, getPost, deletePost, updatePost } from "../controller/create.controller.js";

const postRouter = Router();

postRouter.post('/create', verifyToken, createPost)
postRouter.get('/getposts', getPost)
postRouter.delete('/deletePost/:postId/:userId', verifyToken, deletePost)
postRouter.put('/updatePost/:postId/:userId', verifyToken, updatePost)

export default postRouter;
