const { userController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const userRouter = Router();

userRouter.post("/signin/", userController.signIn);

userRouter.post("/signup/", userController.signUp);

userRouter.get("/:id", userController.getById);

module.exports = {
  userRouter: userRouter,
};
