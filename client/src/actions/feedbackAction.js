import axios from "axios";
import {
  ADD_FEEDBACK,
  GET_ERRORS,
  GET_FEDDBACKS,
  FEEDBACK_LOADING,
  DELETE_FEEDBACK
} from "./types";

// add feedback
export const addFeedback = feedbackData => dispatch => {
  axios
    .post("/api/feedback", feedbackData)
    .then(res =>
      dispatch({
        type: ADD_FEEDBACK,
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

// Get Feedbacks
export const getFeedbacks = () => dispatch => {
  dispatch(setFeedbackLoading());
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

// Delete feedback
export const deleteFeedback = id => dispatch => {
  axios
    .delete(`/api/feedback/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_FEEDBACK,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// add like
export const addLike = id => dispatch => {
  axios
    .post(`/api/feedback/like/${id}`)
    .then(res => dispatch(getFeedbacks()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// remove like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/feedback/unlike/${id}`)
    .then(res => dispatch(getFeedbacks()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set loading state
export const setFeedbackLoading = () => {
  return {
    type: FEEDBACK_LOADING
  };
};
