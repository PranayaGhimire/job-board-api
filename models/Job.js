import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    description:String,
    location:String,
    salary:Number,
    jobType:{
        type:String,
        enum:['full-time','part-time','remote'],
        default:"full-time"
    },
    applicants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
},{timestamps:true});

export default mongoose.model("Job",jobSchema);