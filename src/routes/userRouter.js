import { Router } from "express";
import {
  createUser,
  findAllUsers,
  updateUser,
  deleteUser,
  addMoviesToUser,
} from "../controllers/userHandlers.js";

const router = Router();

router.get("/", findAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:userId/movie/:movieId", addMoviesToUser);

export default router;
