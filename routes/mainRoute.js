import express from "express";
const router = express.Router();
router.get("/",async (req,res) => res.send(`
    <h2>API Working Fine</h2>
    <h3>Test the endpoints using postman</h3>
    <h4>/api/auth/register</h4>
    <h4>/api/auth/login</h4>
    <h4>/api/jobs</h4>
    <h4>/api/jobs/company</h4>
    <h4>/api/applications/user</h4>
    <h4>/api/applications/company</h4>
    `))
export default router;