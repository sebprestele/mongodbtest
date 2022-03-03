import express from "express";
import dotenv from "dotenv";
import movieRouter from "./src/routes/movies.js";
import userRouter from "./src/routes/userRouter.js";

const app = express();

app.use(express.json());
dotenv.config();

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/users", userRouter);

export default app;
