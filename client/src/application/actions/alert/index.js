import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/ui/alert";
import { SET_UI_LOGOUT } from "../logout";

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
      state.open = true;
      state.error = true;
      state.message = payload;
    },
    [SET_UI_LOGOUT]: () => {
      return initialState;
    },
  },
});

const { actions, reducer: alert } = alertSlice;

export const alertActions = actions;

export default alert;
