import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/entities/client";

const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
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

const { actions, reducer: client } = clientSlice;

export const actionsRegister = actions;

export default client;
