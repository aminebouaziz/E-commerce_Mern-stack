import axios from "axios";

import { GET_CART, GET_ERRORS, GET_ORDER } from "./types";

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

// add cart to order

export const passOrder = (cartId, orderItem) => dispatch => {
  axios
    .post(`/api/order/addOrder/${cartId}`, orderItem)
    .then(res =>
      dispatch({
        type: GET_ORDER,
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

// Delete cart

// remove product from cart
export const deleteCart = cartId => dispatch => {
  axios.delete(`/api/card/${cartId}`).then(res =>
    dispatch({
      type: GET_CART,
      payload: res.data
    })
  );
};
