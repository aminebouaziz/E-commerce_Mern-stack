// ADMIN SIDE

import axios from "axios";

import {
  PRODUCT_LOADING,
  GET_PRODUCT,
  DELETE_PRODUCT,
  GET_ERRORS
} from "./types";

// Add product
export const addPorduct = (productData, history) => dispatch => {
  axios
    .post("/api/products", productData)
    .then(res => history.push("/products"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Get products
export const getProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("api/products/all")
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCT,
        payload: null
      })
    );
};

// set loading state
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};

// Delete product
export const deleteProduct = (productId) => dispatch => {
  axios
    .delete(`/api/products/${productId}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};