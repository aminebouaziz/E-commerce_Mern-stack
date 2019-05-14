import axios from "axios";
import {
  
  GET_FEDDBACKS
 
} from "./types";


// Get Feedbacks
export const getFeedbacks = () => dispatch => {
  
  axios
    .get("/api/feedback")
    .then(res =>
      dispatch({
        type: GET_FEDDBACKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FEDDBACKS,
        payload: null
      })
    );
};

