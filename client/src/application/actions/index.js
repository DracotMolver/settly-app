import { combineReducers } from "redux";
import client from "./client";
import register from "./register";
import auth from "./auth";

const reducers = {
  entities: combineReducers({
    client,
  }),
  ui: combineReducers({
    auth,
    register,
  }),
};

export default reducers;
