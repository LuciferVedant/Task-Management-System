import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./src/feature/User/userRoutes.js";
import taskRouter from "./src/feature/Task/taskRoutes.js";
import jwtAuth from "./src/middlewares/jwtmiddleware.js";

import { connectUsingMongoose } from "./src/config/mongoose.js";

const server = express();
dotenv.config();
server.use(cors());
server.use(express.json());

server.use("/api/user", userRouter);
server.use("/api/tasks", jwtAuth, taskRouter);

server.listen(3200, () => {
  console.log("task management system is running on port 3200");
  connectUsingMongoose();
});
