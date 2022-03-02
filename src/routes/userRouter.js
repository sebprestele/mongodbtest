import { Router } from "express";
import {
  createUser,
  findAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userHandlers.js";

const router = Router();

router.get("/", findAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
