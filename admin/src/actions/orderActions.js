// ADMIN SIDE

import axios from "axios";

import { GET_ORDER,GET_ERRORS } from "./types";

// Get orders
export const getOrders = () => dispatch => {
  axios
    .get("/api/order")
    .then(res =>
      dispatch({
        type: GET_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ORDER,
        payload: []
      })
    );
};

// Delete order
export const deleteOrder = (orderId) => dispatch => {
  axios
    .delete(`/api/order/${orderId}`)
    .then(res =>
      dispatch({
        type: GET_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    );
};