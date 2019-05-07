import { GET_CART, GET_ORDER } from "../actions/types";

const initialState = {
  cart: null,
  order: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}
