import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { ROLES } from "../utils/roles.js";
import { deleteJob, deleteUser, getApplications, getJobs, getUsers } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users",protect,authorizeRoles(ROLES.ADMIN),getUsers);
router.delete("/users/:id",protect,authorizeRoles(ROLES.ADMIN),deleteUser);
router.get("/jobs",protect,authorizeRoles(ROLES.ADMIN),getJobs);
router.delete("/jobs/:id",protect,authorizeRoles(ROLES.ADMIN),deleteJob);
router.get("/applications",protect,authorizeRoles(ROLES.ADMIN),getApplications);

export default router;