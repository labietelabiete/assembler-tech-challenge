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
    `${API_ROUTES.GIFS}${API_ROUTES.TRENDING}?api_key=ETYf98tQY7zbX0UTHAsmjqR8RfvQWV2R&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`
  );
}

async function searchGifs(query, limit = 20, offset = 0, api = makeGiphyApi()) {
  return api.get(
    `${API_ROUTES.GIFS}${API_ROUTES.SEARCH}?api_key=ETYf98tQY7zbX0UTHAsmjqR8RfvQWV2R&q=${query}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`
  );
}

module.exports = {
  getTrendingGifs,
  searchGifs,
};
