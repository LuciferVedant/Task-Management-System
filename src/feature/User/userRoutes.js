import express from "express";
import UserController from "./userController.js";
const userController = new UserController();
const userRouter = express.Router();
userRouter.post("/signin", (req, res, next) => {
  userController.signIn(req, res, next);
});
userRouter.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});

export default userRouter;
