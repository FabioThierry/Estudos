import { Router } from "express";
import userControllers from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

// router.get("/", userControllers.index); // Lista usuários
// router.get("/:id", userControllers.show); // Lista usuário

router.post("/", loginRequired, userControllers.store);
router.put("/", loginRequired, userControllers.update);
router.delete("/", loginRequired, userControllers.delete);

export default router;
