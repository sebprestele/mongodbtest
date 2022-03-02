import { Router } from "express";
import {
  createMovie,
  findAll,
  /*  updateMovie,
  deleteMovie, */
} from "../controllers/movies.js";

const router = Router();

router.get("/", findAll);

router.post("/", createMovie);
/* 
router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie); */

export default router;
