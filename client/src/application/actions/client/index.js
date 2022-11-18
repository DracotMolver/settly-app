import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/entities/client";
import { SET_UI_LOGOUT } from "../logout";

function _fetching(state) {
  state.fetching = true;
  state.fetched = false;
  state.error = false;
}

function _fetched(state) {
  state.fetching = false;
  state.fetched = true;
  state.error = false;
}

function _error(state) {
  state.fetching = false;
  state.fetched = true;
  state.error = true;
}

const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
    setClientInit: _fetching,
    setClientSuccess: (state, { payload }) => {
      _fetched(state);

      state.data = state.data.concat(payload);
    },
    setClientFailure: _error,
    //
    getClientInit: (state) => {
      _fetching(state);

      state.data = [];
    },
    getClientSuccess: (state, { payload }) => {
      _fetched(state);

      state.data = payload;
    },
    getClientFailure: _error,
    //
    removeClientInit: _fetching,
    removeClientSuccess: (state, { payload }) => {
      _fetched(state);

      state.data = state.data.filter(
        (client) => client.id !== Number(payload?.id || 0)
      );
    },
    removeClientFailure: _error,
    [SET_UI_LOGOUT]: () => {
      return initialState;
    },
  },
});

const { actions, reducer: client } = clientSlice;

export const clientActions = actions;

export default client;
