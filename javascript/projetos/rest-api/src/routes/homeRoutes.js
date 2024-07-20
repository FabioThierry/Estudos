import { Router } from "express";
import homeControllers from "../controllers/HomeController.js";
const router = new Router();

router.get("/", homeControllers.index);

export default router;
