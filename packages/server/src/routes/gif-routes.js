const { gifController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const gifRouter = Router();

gifRouter.post("/", gifController.addGif);

gifRouter.get("/", gifController.getAll);

gifRouter.get("/:id", gifController.getById);

module.exports = {
  gifRouter: gifRouter,
};
