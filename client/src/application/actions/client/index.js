import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/entities/client";

const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
    setClientInit: (state) => {
      state.fetching = true;
      state.fetched = false;
      state.error = false;
    },
    addClientSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data = state.data.concat(payload);
    },
    addClientFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
    getClientInit: (state) => {
      state.fetching = true;
      state.fetched = false;
      state.error = false;
      state.data = [];
    },
    getClientSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data = payload;
    },
    getClientFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
  },
});

const { actions, reducer: client } = clientSlice;

export const actionsClient = actions;

export default client;
