import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { applyJob, getCompanyApplications, getUserApplications } from "../controllers/applicationController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
const router = express.Router();
router.post("/",protect,authorizeRoles("user"),applyJob);
router.get("/user",protect,authorizeRoles("user"),getUserApplications);
router.get("/company",protect,authorizeRoles("company"),getCompanyApplications);
export default router;