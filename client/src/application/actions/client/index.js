import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/entities/client";

const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
    setAddClientInit: (state) => {
      state.fetching = true;
      state.fetched = false;
      state.data = null;
      state.error = false;
    },
    setAddClientSuccess: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.data = payload;
    },
    setAddClientFailure: (state, { payload }) => {
      state.fetching = false;
      state.fetched = true;
      state.error = payload;
    },
  },
});

const { actions, reducer: client } = clientSlice;

export const actionsClient = actions;

export default client;
