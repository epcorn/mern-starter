import { Router } from "express";

import {
  login,
  logout,
  register,
  users,
  deleteUser,
} from "../controller/userController.js";
import { ifAdmin, verifyToken } from "../middleware/verifyUser.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.get("/", users);
router.delete("/:id", deleteUser);
export default router;
