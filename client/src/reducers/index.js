import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import feedbackReducer from "./feedbackReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  feedback: feedbackReducer,
  product: productReducer,
  cart: cartReducer
});
