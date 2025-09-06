import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createJob, getCompanyJobs, getJobs } from "../controllers/jobController.js";
const router = express.Router();
router.post("/",protect,createJob);
router.get("/",getJobs);
router.get("/company",protect,getCompanyJobs);
export default router;

