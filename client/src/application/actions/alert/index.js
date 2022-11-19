import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/ui/alert";

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlertInit: (state) => {
      state.open = false;
      state.error = false;
      state.message = "";
    },
    setAlertSuccess: (state, { payload }) => {
      state.open = true;
      state.error = false;
      state.message = payload;
    },
    setAlertFailure: (state, { payload }) => {
      console.log(payload)
      const { errors, message, error } = payload;
      state.open = true;
      state.error = true;
      state.message = errors || message || error;
    },
    clearAlertState: () => {
      return initialState;
    },
  },
});

const { actions, reducer: alert } = alertSlice;

export const alertActions = actions;

export default alert;
