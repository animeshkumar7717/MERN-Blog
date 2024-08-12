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

export const google = async (req, res, next) => {
  
  const { 
    name,
    email,
    googlePhotoUrl 
  } = req.body;
  try {
    const user = await User.findOne({ email });
    
    if(user) {
      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
      
      const { password, ...rest } = user._doc      
      return res.status(200).cookie('access_token', token, {
        httpOnly: true ,
      }).json(rest)
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
      const hashPassword = await bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username: name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4),
        email,
        password: hashPassword,
        profilePicture: googlePhotoUrl
      })      
      await newUser.save();
      const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      
      return res.status(200).cookie('access_token', token, {httpOnly: true}).json(rest)
    }
  } catch (error) {
    next(error);
  }
};
