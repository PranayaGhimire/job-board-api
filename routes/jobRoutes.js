import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createJob, getCompanyJobs, getJobs } from "../controllers/jobController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
const router = express.Router();
router.post("/",protect,authorizeRoles('company'),createJob);
router.get("/",getJobs);
router.get("/company",protect,authorizeRoles('company'),getCompanyJobs);
export default router;

