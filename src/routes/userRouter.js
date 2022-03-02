import { Router } from "express";
import {
  createUser,
  findAllUsers,
  updateUser,
} from "../controllers/userHandlers.js";

const router = Router();

router.get("/", findAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
