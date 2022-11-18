import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
//
import { authActions } from "../../../application/actions/auth";
import { alertActions } from "../../../application/actions/alert";
import paths from "../../../ui/router/paths";
import endpoints from "../../endpoints";

const { setAuthInit, setAuthSuccess, setAuthFailure } = authActions;
const { setAlertInit, setAlertFailure } = alertActions;

function useLoginApi() {
  const dispatch = useDispatch();

  const _reqLoginAdmin = useCallback(async (payload) => {
    dispatch(setAuthInit());
    dispatch(setAlertInit());

    try {
      const response = await axios.post(endpoints.loginAdmin, payload);
      dispatch(setAuthSuccess(response.data));
      return redirect(paths.dashboard);
    } catch (error) {
      dispatch(setAlertFailure(error.response.data));
      dispatch(setAuthFailure());
    }
  }, []);

  const actions = {
    reqLoginAdmin: _reqLoginAdmin,
  };

  return actions;
}

export default useLoginApi;
