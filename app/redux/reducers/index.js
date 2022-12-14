import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { userReducer } from "./userReducer";
export const reducers = combineReducers({
  courses: coursesReducer,
  user: userReducer,
});
