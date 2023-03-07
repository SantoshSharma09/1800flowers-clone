import axios from "axios";
import * as types from "./auth.actionTypes";

export const login = (creds) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  return axios
    .post("https://wicked-long-underwear-slug.cyclic.app/users/login", creds)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_SUCCESS });
    })

    .catch((err) => dispatch({ type: types.LOGIN_FAILURE }));
};
