import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config()

mongoose
  .connect(process.env.MONGODB
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});

// jabiribnuyoosuf
// c1QgjseRWC4AKeFG
