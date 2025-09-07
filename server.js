import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRoute from "./routes/mainRoute.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { mongoConnect } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/",mainRoute);

app.use("/api/auth",authRoutes);
app.use("/api/jobs",jobRoutes);
app.use("/api/applications",applicationRoutes);
app.use("/api/admin",adminRoutes);

mongoConnect();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));