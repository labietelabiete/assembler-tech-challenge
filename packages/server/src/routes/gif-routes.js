const { gifController } = require("../controllers");
const Router = require("express").Router;
const multer = require("multer"); //use multer to upload blob data
const upload = multer(); // setup the multer

// Declaring router
const gifRouter = Router();

const mdlUpload = upload.fields([{ name: "urlFile" }]);

gifRouter.post("/", mdlUpload, gifController.addGif);

gifRouter.get("/", gifController.getAll);

gifRouter.get("/:id", gifController.getById);

module.exports = {
  gifRouter: gifRouter,
};
