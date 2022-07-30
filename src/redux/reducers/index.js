import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import userReducer from "./userReducers";
import { combineReducers } from "redux";
const reducers = combineReducers({
  countReducer,
  todoReducer,
  userReducer,
});
export default reducers;
