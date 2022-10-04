import express from "express";
import { featuredController } from "../controllers/index.js";

let router;

router = express.Router();

router.get("/", featuredController);

export default router;