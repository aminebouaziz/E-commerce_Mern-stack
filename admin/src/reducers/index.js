// ADMIN SIDE
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import feedbackReducer from "./feedbackReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  product: productReducer,
  order: orderReducer,
  feedbacks: feedbackReducer
});
