import { Router } from "express";
import { test } from "../controller/user.controller.js";
import { google, signIn, signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/google", google);

export default authRouter;
