import { GET_PRODUCTS, PRODUCT_LOADING } from "../actions/types";

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
    default:
      return state;
  }
}
