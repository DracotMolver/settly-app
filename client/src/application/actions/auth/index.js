import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/ui/auth";
import { SET_UI_LOGOUT } from "../logout";

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
      state.data.user = {};
    },
    setAuthSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data.token = payload?.token || "";
      state.data.isLogged = true;
      state.error = false;
      state.data.user = JSON.parse(payload?.admin);

      if (!window.sessionStorage.getItem("token") && payload?.token) {
        window.sessionStorage.setItem("token", payload.token);
      }
    },
    setAuthFailure: (state) => {
      state.fetching = false;
      state.fetched = true;
      state.data.token = "";
      state.data.isLogged = false;
      state.data.user = {};
      state.error = true;
    },
    [SET_UI_LOGOUT]: () => {
      return initialState;
    },
  },
});

const { actions, reducer: auth } = authSlice;

export const actionsAuth = actions;

export default auth;
