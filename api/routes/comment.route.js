import { Router } from "express";
import {verifyToken}  from "../utils/verifyUser.js";
import { createComment } from "../controller/comment.controller.js";

const commentRoute = Router();

commentRoute.post('/create', verifyToken, createComment)

export default commentRoute;
