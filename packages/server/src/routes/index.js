const { userRouter } = require("./user-routes");
const { gifRouter } = require("./gif-routes");
const { searchRouter } = require("./search-routes");

module.exports = {
  userRouter: userRouter,
  gifRouter: gifRouter,
  searchRouter: searchRouter,
};
