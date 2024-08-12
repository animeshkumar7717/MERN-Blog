import { Router } from "express";
import { test, updateUser, deleteUser } from "../controller/user.controller.js";
import {verifyToken}  from "../utils/verifyUser.js";

const userRouter = Router();

userRouter.get("/", test);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);


export default userRouter;
