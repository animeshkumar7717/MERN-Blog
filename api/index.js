import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from 'cookie-parser';
import postRouter from "./routes/post.route.js";
import commentRoute from "./routes/comment.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then((data) => {
    console.log(
      "successfully connected with the database",
      data.connection.host
    );
  })
  .catch((err) =>
    console.log("failed to connect with the database", err.message)
  );

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is working...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRoute);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000!`);
});
