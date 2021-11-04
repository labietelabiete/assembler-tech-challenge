import { SET_LOGIN, SET_LOGOUT } from "./types";

export const logIn = (value) => ({
  type: SET_LOGIN,
  payload: value,
});

export const logOut = () => ({ type: SET_LOGOUT });
