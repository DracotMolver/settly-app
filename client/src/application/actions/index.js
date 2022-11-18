import { combineReducers } from "redux";
import client from "./client";
import register from "./register";
import auth from "./auth";
import alert from "./alert";

const reducers = {
  entities: combineReducers({
    client,
    auth,
  }),
  ui: combineReducers({
    register,
    alert,
  }),
};

export default reducers;
