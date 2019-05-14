import {
 
  GET_FEDDBACKS
} from "../actions/types";

const initialState = {
  feedbacks: [],
  feedback: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case GET_FEDDBACKS:
      return {
        ...state,
        feedbacks: action.payload,
        loading: false
      };
   

    default:
      return state;
  }
}
