import {
  GET_PRODUCTS,
  PRODUCT_LOADING,
  GET_PRODUCT_BYID
} from "../actions/types";

const initialState = {
  product: {},
  products: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        ...state.products
      };
    case GET_PRODUCT_BYID:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
