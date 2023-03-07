import * as types from "./app.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  products: [],
  cart: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_DATA_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_PRODUCTS_DATA_SUCCESS: {
      return { ...state, isLoading: false, products: payload, isError: false };
    }
    case types.GET_PRODUCTS_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case types.HIGH_TO_LOW:{
      return {...state,isLoading:false,products:payload,isError:false};
    }
    case types.LOW_TO_HIGH:{
      return {...state,isLoading:false,products:payload,isError:false}
    }
    default:
      return state;
  }
};
