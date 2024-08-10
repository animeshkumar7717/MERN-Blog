import { Router } from "express";
import { test, updateUser } from "../controller/user.controller.js";
import {verifyToken}  from "../utils/verifyUser.js";

const userRouter = Router();

userRouter.get("/", test);
userRouter.put("/update/:userId", verifyToken, updateUser);

export default userRouter;
