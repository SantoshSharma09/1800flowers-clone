import axios from "axios";
import * as types from "./app.actionTypes";

export const getProductsData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_DATA_LOADING });
  return axios
    .get("https://wicked-long-underwear-slug.cyclic.app/products")
    .then((res) =>
      dispatch({ type: types.GET_PRODUCTS_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_PRODUCTS_DATA_FAILURE }));
};

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_LOADING });
  return fetch("https://wicked-long-underwear-slug.cyclic.app/cart/add", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => dispatch({ type: types.ADD_TO_CART_SUCCESS }))
    .catch((err) => dispatch({ type: types.ADD_TO_CART_FAILURE }));

  // return axios
  //   .post("https://wicked-long-underwear-slug.cyclic.app/cart/add", product)
  //   .then((res) => dispatch({ type: types.ADD_TO_CART_SUCCESS }))
  //   .catch((err) => dispatch({ type: types.ADD_TO_CART_FAILURE }));
};
export const htol = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_DATA_LOADING });
  return axios
    .get(
      "https://wicked-long-underwear-slug.cyclic.app/products?sort=price&order=1"
    )
    .then((res) =>
      dispatch({ type: types.HIGH_TO_LOW, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_PRODUCTS_DATA_FAILURE }));
};
