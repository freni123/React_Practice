import { combineReducers } from "redux";
import adminReducer from "./admin/reducer/reducer";

const rootReducers = combineReducers({
  adminReducer,
});

export default rootReducers;
