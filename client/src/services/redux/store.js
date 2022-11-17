import { configureStore } from "@reduxjs/toolkit";
//
import registerReducer from "./features/register";

export const store = configureStore({
  reducer: {
    registerReducer,
  },
});
