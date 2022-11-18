import axios from "axios";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import paths from "../../../router/paths";
//
import endpoints from "../../endpoints";
import { actionsAuth } from "../../redux/features/auth";

const { setAuthInit, setAuthSuccess, setAuthFailure } = actionsAuth;

function useLoginApi() {
  const dispatch = useDispatch();

  async function _reqAddClient(payload) {
    dispatch(setAuthInit(payload));

    try {
      const response = await axios.post(endpoints.addClient, payload);
      dispatch(setAuthSuccess(response?.data));
      return redirect(paths.dashboard);
    } catch (error) {
      dispatch(setAuthFailure(error?.response?.data));
    }
  }

  const actions = {
    reqAddClient: _reqAddClient,
  };

  return actions;
}

export default useLoginApi;
