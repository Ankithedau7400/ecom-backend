import express from "express";

const seedRouter = express.Router();
import { seed } from "../controllers/seedController.js";

seedRouter.get("/", seed);
export default seedRouter;
