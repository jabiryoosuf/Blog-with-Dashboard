import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { unUsualErrorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(unUsualErrorHandler(400,'All fields are required'))
  }
  const hashPassword = bcryptjs.hashSync(password,10)
  const newUser = new User({
    username,
    email,
    password:hashPassword,
  });
  try {
    await newUser.save();
    res.json("Signup successfull");
  } catch (error) {
    next(error)
  }
};