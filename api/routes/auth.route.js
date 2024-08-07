import { Router } from "express";
import { test } from "../controller/user.controller.js";
import { signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signUp);

export default authRouter;
