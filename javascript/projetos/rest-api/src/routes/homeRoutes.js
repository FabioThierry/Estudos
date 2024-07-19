import { Router } from "express";
import homeControllers from "../controllers/HomeControllers.js";
const router = new Router();

router.get("/", homeControllers.index);

export default router;
