import { Router } from "express";
import { UserController } from "../controllers/user.controller";
const router = Router();

const userRoutes = new UserController().router;

router.use("/test", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
});
// router.use('/user', userRoutes);

router.use("/user", userRoutes);

export { router };
