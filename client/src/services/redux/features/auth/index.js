import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    token: "",
    isLogged: false,
  },
  feching: false,
  fetched: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
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
      state.data = payload;
    },
    setAuthFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const actionsAuth = actions;

export default authReducer;
