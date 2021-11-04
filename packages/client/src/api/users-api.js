import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeUsersApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.USERS}`,
  });
}

export async function createUser(data, api = makeUsersApi()) {
  return api.post(`/signup`, data, {});
}
