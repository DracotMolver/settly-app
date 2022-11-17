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
    setRegisterInit: (state) => {
      state.fetching = true;
      state.fetched = false;
      state.data = null;
      state.error = false;
    },
    setRegisterSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data = payload;
    },
    setRegisterFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
  },
});

const { actions, reducer: registerReducer } = registerSlice;

export const actionsRegister = actions;

export default registerReducer;