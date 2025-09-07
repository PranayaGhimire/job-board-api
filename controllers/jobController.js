import Job from "../models/Job.js";

export const createJob = async (req,res) => {
    try {
        const job = await Job.create({...req.body,company:req.user._id});
        res.status(201).json({
            message:"Job created successfully",
            data:job
        });   
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const getJobs = async (req,res) => {
    try {
        const {location,jobType,minSalary,maxSalary,page=1,limit=10}=req.query;
        let filter ={};
        if (location) filter.location=location;
        if (jobType) filter.jobType=jobType;
        if(minSalary || maxSalary) 
            filter.salary={
                $gte:minSalary || 0,
                $lte:maxSalary || 1000000
            }
        const jobs = await Job.find(filter)
            .populate("company","name email")
            .skip((page-1)*limit)
            .limit(Number(limit));
        res.status(201).json({
            message:"Job fetched successfully",
            data:jobs
        });   
    } catch (error) {
        res.status(500).json({message:error.message});   
    }
};

export const getCompanyJobs = async (req,res) => {
    try {
        const jobs = await Job.find({company:req.user._id});
        res.status(201).json({
            message:"Company jobs fetched successfully",
            data:jobs
        });   
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};