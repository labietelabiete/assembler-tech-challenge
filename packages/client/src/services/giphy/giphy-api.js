const { REACT_APP_GIPHY_API_KEY } = process.env;

const axios = require("axios").default;

const API_ROUTES = {
  MAIN: "https://api.giphy.com/v1",
  GIFS: "/gifs",
  TRENDING: "/trending",
  SEARCH: "/search",
};

function makeGiphyApi() {
  return axios.create({
    baseURL: `${API_ROUTES.MAIN}`,
  });
}

async function getTrendingGifs(limit = 8, offset = 0, api = makeGiphyApi()) {
  return api.get(
    `${API_ROUTES.GIFS}${API_ROUTES.TRENDING}?api_key=${REACT_APP_GIPHY_API_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`
  );
}

async function searchGiphy(query, limit = 8, offset = 0, api = makeGiphyApi()) {
  return api.get(
    `${API_ROUTES.GIFS}${API_ROUTES.SEARCH}?api_key=${REACT_APP_GIPHY_API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`
  );
}

module.exports = {
  getTrendingGifs,
  searchGiphy,
};
