import express from "express";
import { getHello } from "../controllers/moviesController";
const router = express.Router();
router.get("/", getHello);
export default router;
