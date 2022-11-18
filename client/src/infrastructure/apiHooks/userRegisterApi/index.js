import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
//
import { actionsRegister } from "../../../application/actions/register";
import endpoints from "../../endpoints";

const { setRegisterInit, setRegisterSuccess, setRegisterFailure } =
  actionsRegister;

function useRegisterApi() {
  const dispatch = useDispatch();

  const _reqRegisterAdmin = useCallback(async (payload) => {
    dispatch(setRegisterInit());

    try {
      const response = await axios.post(endpoints.registerAdmin, payload);
      dispatch(setRegisterSuccess(response?.data));
    } catch (_) {
      dispatch(setRegisterFailure());
    }
  }, []);

  const actions = {
    reqRegisterAdmin: _reqRegisterAdmin,
  };

  return actions;
}

export default useRegisterApi;
