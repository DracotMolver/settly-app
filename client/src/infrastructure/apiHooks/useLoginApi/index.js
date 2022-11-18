import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
//
import { actionsAuth } from "../../../application/actions/auth";
import paths from "../../../ui/router/paths";
import endpoints from "../../endpoints";

const { setAuthInit, setAuthSuccess, setAuthFailure } = actionsAuth;

function useLoginApi() {
  const dispatch = useDispatch();

  const _reqLoginAdmin = useCallback(async (payload) => {
    dispatch(setAuthInit());

    try {
      const response = await axios.post(endpoints.loginAdmin, payload);
      dispatch(setAuthSuccess(response?.data));
      return redirect(paths.dashboard);
    } catch (_) {
      dispatch(setAuthFailure());
    }
  }, []);

  const actions = {
    reqLoginAdmin: _reqLoginAdmin,
  };

  return actions;
}

export default useLoginApi;
