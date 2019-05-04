import axios from "axios";

import { GET_CART } from "./types";

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
