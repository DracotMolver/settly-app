import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/ui/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthInit: (state) => {
      state.fetching = true;
      state.fetched = false;
      state.data.token = "";
      state.data.isLogged = false;
      state.error = false;
    },
    setAuthSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data.token = payload?.token || "";
      state.data.isLogged = true;
      state.error = false;

      if (!window.sessionStorage.getItem("token") && payload?.token) {
        window.sessionStorage.setItem("token", payload.token);
      }
    },
    setAuthFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data.token = "";
      state.data.isLogged = false;
      state.error = payload;
    },
  },
});

const { actions, reducer: auth } = authSlice;

export const actionsAuth = actions;

export default auth;