import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { applyJob, getCompanyApplications, getUserApplications } from "../controllers/applicationController.js";
const router = express.Router();
router.post("/",protect,applyJob);
router.get("/user",protect,getUserApplications);
router.get("/company",protect,getCompanyApplications);
export default router;