import { Router } from "express";
import { test } from "../controller/user.controller.js";
import { signIn, signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);

export default authRouter;
