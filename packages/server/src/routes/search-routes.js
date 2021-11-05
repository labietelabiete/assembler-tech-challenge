const { searchController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const searchRouter = Router();


searchRouter.get("/gifs", searchController.searchGif);

module.exports = {
  searchRouter: searchRouter,
};