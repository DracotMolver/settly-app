import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../domain/ui/register";
import { SET_UI_LOGOUT } from "../logout";

const registerSlice = createSlice({
  name: "register",
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
    [SET_UI_LOGOUT]: () => {
      return initialState;
    },
  },
});

const { actions, reducer: register } = registerSlice;

export const actionsRegister = actions;

export default register;
