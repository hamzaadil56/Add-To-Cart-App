import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
const reducer = combineReducers({
  shop: counterReducer,
  auth: authReducer,
});
export default reducer;
