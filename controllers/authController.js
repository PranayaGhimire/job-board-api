import User from "../models/User.js";

const generateToken = (id) => jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"});

export const register = async (req,res) => {
    const {name,email,password,role} = req.body;
    try {
        const user = await User.create({name,email,password,role});
        res.status(201).json({
            message:"User registered successfully",
            token:generateToken(user._id),
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

export const login = async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && await user.comparePassword(password)){
        res.json({
            message:"User logged in successfully",
            token:generateToken(user._id),
            data:user
        });
    }
    else {
        res.status(500).json({
            message:"Invalid Credentials"
        });
    }
};