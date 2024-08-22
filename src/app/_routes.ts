import { Router } from "express";
import { UserController } from "./controllers/user.controller";
const router = Router();

const userRoutes = new UserController().routes;

router.use("/user", userRoutes);

export { router };
