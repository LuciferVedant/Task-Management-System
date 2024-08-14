import express from "express";
import TaskController from "./taskController.js";
const taskRouter = express.Router();
const taskController = new TaskController();
taskRouter.post("/createtask", (req, res, next) => {
  taskController.createTask(req, res, next);
});
taskRouter.get("/gettask", (req, res, next) => {
  taskController.getTasks(req, res, next);
});
taskRouter.post("/updatetask", (req, res, next) => {
  taskController.updateTask(req, res, next);
});
taskRouter.delete("/deletetask", (req, res, next) => {
  taskController.deleteTask(req, res, next);
});
export default taskRouter;
