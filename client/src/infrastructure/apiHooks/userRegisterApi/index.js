import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
//
import { registerActions } from "../../../application/actions/register";
import { alertActions } from "../../../application/actions/alert";
import endpoints from "../../endpoints";

const { setRegisterInit, setRegisterSuccess, setRegisterFailure } =
  registerActions;

const { setAlertInit, setAlertSuccess, setAlertFailure } = alertActions;

function useRegisterApi() {
  const dispatch = useDispatch();

  const _reqRegisterAdmin = useCallback(async (payload) => {
    dispatch(setRegisterInit());
    dispatch(setAlertInit());

    try {
      const response = await axios.post(endpoints.registerAdmin, payload);
      dispatch(setRegisterSuccess(response.data));
      dispatch(setAlertSuccess(["You have created an account successfully"]));
    } catch (error) {
      dispatch(setAlertFailure(error.response.data));
      dispatch(setRegisterFailure());
    }
  }, []);

  const actions = {
    reqRegisterAdmin: _reqRegisterAdmin,
  };

  return actions;
}

export default useRegisterApi;
