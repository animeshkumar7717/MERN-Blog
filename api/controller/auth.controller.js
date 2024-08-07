import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

/**
 * we created bcryptjs not bcypt, becuase bcrypt creates problem during deployment. 
 * both worked as same
 */

export const signUp = async(req,res, next) => {
    const { username, email, password } = req.body
    if(!username|| !email|| !password || username===''|| email===''|| password==='' ) {
        // return res.status(400).json({
        //     status: 400,
        //     message: 'All field is required!'
        // })
        next(errorHandler(400, 'All field is required!'))
    }
    const hashPassword = await bcryptjs.hashSync(password, 10)

    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        return res.status(201).json({
            message: 'SignUp successfull!'
        })
    } catch (error) {
        next(error)
        
    }    
}