import express from "express";
import peopleRoutes from "./people";

const router = express.Router();

router.use("/people", peopleRoutes);

export default router;
