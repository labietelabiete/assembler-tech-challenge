const dotenv = require("dotenv");

dotenv.config();

const { GIPHY_API_KEY } = process.env;

const CONFIG = {
  giphy: {
    apiKey: GIPHY_API_KEY,
  },
};

module.exports = {
  config: CONFIG,
};
