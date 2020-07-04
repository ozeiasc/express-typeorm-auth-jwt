import { Router } from "express";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";

const router = Router();

router.post("/users", UserController.store);
router.post("/authenticate", AuthController.authenticate);

export default router;
