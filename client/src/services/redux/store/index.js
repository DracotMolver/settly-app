import { configureStore } from "@reduxjs/toolkit";
//
import register from "../features/register";
import auth from "../features/auth";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    auth,
    register,
  },
  middleware: middlewares,
});
