import { configureStore } from "@reduxjs/toolkit";
import reducers from "../../actions";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

const store = configureStore({
  middleware,
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
