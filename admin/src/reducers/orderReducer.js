import { GET_ORDER } from "../actions/types";

const initialState = {
  order: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}
