import Application from "../models/Application.js";
import Job from "../models/Job.js";
import User from "../models/User.js"

export const getUsers = async (req,res) => {
    const users = await User.find();
    res.status(201).json({
        message:"All users fetched successfully",
        data:users
    });
};

export const deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json({
        message:"User deleted successfully"
    });
}

export const getJobs = async (req,res) => {
    const jobs = await Job.find();
    res.status(201).json({
        message:"All jobs fetched successfully",
        data:jobs
    });
}

export const deleteJob = async (req,res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.status(201).json({
        message:"Job deleted successfully"
    })
}

export const getApplications = async (req,res) => {
    const applications = await Application.find().populate("job user");
    res.status(201).json({
        message:"All applications fetched successfully",
        data:applications
    });
};