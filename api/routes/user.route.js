import { Router } from "express";
import { test, updateUser, deleteUser, signOutUser, getUser } from "../controller/user.controller.js";
import {verifyToken}  from "../utils/verifyUser.js";

const userRouter = Router();

userRouter.get("/", test);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);
userRouter.post("/signout", signOutUser);
userRouter.get("/getusers", verifyToken, getUser);

export default userRouter;
