import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createComment, getPostComment } from "../controller/comment.controller.js";

const commentRoute = Router();

commentRoute.post('/create', verifyToken, createComment);
commentRoute.get('/getPostComment/:postId', getPostComment);

export default commentRoute;
