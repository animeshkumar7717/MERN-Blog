import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log(`Server is running on port 3000!`);
});
