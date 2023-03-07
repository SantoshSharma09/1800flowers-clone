import * as types from "./auth.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  isAuth: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") || undefined,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.LOGIN_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true, isError: false };
    }
    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
