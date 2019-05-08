// ADMIN SIDE

import axios from "axios";

import { GET_ORDER } from "./types";

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
