import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createComment, editComment, getPostComment, likeComment } from "../controller/comment.controller.js";

const commentRoute = Router();

commentRoute.post('/create', verifyToken, createComment);
commentRoute.get('/getPostComment/:postId', getPostComment);
commentRoute.put('/likeComment/:commentId', verifyToken, likeComment);
commentRoute.put('/editComment/:commentId', verifyToken, editComment);

export default commentRoute;
