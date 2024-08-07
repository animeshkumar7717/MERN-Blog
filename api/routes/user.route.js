import { Router } from "express";
import { test } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/", test);

export default userRouter;
