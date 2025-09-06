import Application from "../models/Application.js";

export const applyJob = async (req,res) => {
    if(req.user.role !== "user") 
        return res.status(403).json({message:"Only users can apply"});
    const {jobId} = req.body;
    const application = await Application.create({job:jobId,applicant:req.user._id});
    res.status(201).json({
        message:"Job applied successfully",
        data:application
    });
};

export const getUserApplications = async (req,res) => {
    const applications = await Application.find({applicant:req.user._id}).populate("job");
    res.status(201).json({
        message:"User applications fetched successfully",
        data:applications
    });
};

export const getCompanyApplications = async (req,res) => {
    if(req.user.role !=="company")
        return res.status(403).json({ message:"Unauthorized" });
    const applications = await Application.find().populate({
        path:"job",
        match:{ company:req.user._id } 
    }).populate("applicant","name email");
    res.status(201).json({
        message:"Company applications fetched successfully",
        data:applications
    });
};