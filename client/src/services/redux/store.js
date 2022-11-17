import { configureStore } from "@reduxjs/toolkit";
//
import registerReducer from "./features/register";
import authReducer from "./features/auth";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    registerReducer,
    authReducer,
  },
  middleware: middlewares,
});
