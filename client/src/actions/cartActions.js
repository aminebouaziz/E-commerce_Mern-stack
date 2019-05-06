import axios from "axios";

import { GET_CART, GET_ERRORS } from "./types";

//Get current cart
export const getCurrentCart = () => dispatch => {
  axios
    .get("/api/card")
    .then(res =>
      dispatch({
        type: GET_CART,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CART,
        payload: {}
      })
    );
};

// add product to cart

export const addProduct = (cartId, productData) => dispatch => {
  axios
    .post(`/api/card/addProduct/${cartId}`, productData)
    .then(res =>
      dispatch({
        type: GET_CART,
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

// remove product from cart
export const removeProduct = (cartId, productId) => dispatch => {
  axios
    .delete(`/api/card/rmProd/${cartId}/${productId}`)
    .then(res =>
      dispatch({
        type: GET_CART,
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
