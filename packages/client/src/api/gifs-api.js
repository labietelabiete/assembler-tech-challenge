import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeGifsApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.GIFS}`,
  });
}

export async function uploadGif(file = {}, api = makeGifsApi()) {
  return api.post(``, file, {
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
}
