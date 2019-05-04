import axios from "axios";

import { GET_PRODUCTS, PRODUCT_LOADING } from "./types";

// Get products
export const getProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("api/products/all")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCTS,
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
