import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  feching: false,
  fetched: false,
  error: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setAdminInit: (state) => {
      state.fetching = true;
    },
    setAdminSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data = payload;
    },
    setAdminFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
  },
});

const { actions, reducer: registerReducer } = registerSlice;

export const actionsRegister = actions;

export default registerReducer;
