import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

/**
 * we created bcryptjs not bcypt, becuase bcrypt creates problem during deployment. 
 * both worked as same
 */

export const signUp = async(req,res) => {
    const { username, email, password } = req.body
    if(!username|| !email|| !password || username===''|| email===''|| password==='' ) {
        return res.status(400).json({
            message: 'All field is required!'
        })
    }
    const hashPassword = await bcryptjs.hashSync(password, 10)

    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        return res.status(201).json({
            message: 'SignUp successfull!'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error!',
            error: error.message
        })
        
    }
    console.log(req.body);
    
}