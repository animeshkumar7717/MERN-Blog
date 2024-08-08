import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field is required!"));
  }
  const hashPassword = await bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    return res.status(201).json({
      message: "SignUp successfull!",
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (
    !email ||
    !password ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field is required!"));
  }  
  
  const validUser = await User.findOne({ email })

  console.log('validUser', validUser);
  
  

  if(!validUser) {
    return next(errorHandler(404, 'User not found!'))
  }
  const validPassword = await bcryptjs.compareSync(password, validUser.password)
  if(!validPassword) {
    return next(errorHandler(400, 'Invalid Password'))
  }
  const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET )

  const {password: pass, ...rest} = validUser._doc

  return res.status(200).cookie('access_token', token, {
    httpOnly: true
  }).json(rest)
};
