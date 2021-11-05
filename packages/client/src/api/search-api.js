import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeSearchApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.SEARCH}`,
  });
}

export async function searchGifs(
  search,
  page = 0,
  limit = 8,
  api = makeSearchApi()
) {
  return api.get(`${API.GIFS}/?q=${search}&page=${page}&limit=${limit}`, {});
}
