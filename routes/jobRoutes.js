import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createJob, getCompanyJobs, getJobs } from "../controllers/jobController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { ROLES } from "../utils/roles.js";
const router = express.Router();
router.post("/",protect,authorizeRoles(ROLES.COMPANY),createJob);
router.get("/",getJobs);
router.get("/company",protect,authorizeRoles(ROLES.COMPANY),getCompanyJobs);
export default router;

