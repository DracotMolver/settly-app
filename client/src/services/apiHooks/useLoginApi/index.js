import axios from "axios";
import { useDispatch } from "react-redux";
//
import endpoints from "../../endpoints";
import { actionsAuth } from "../../redux/features/auth";

const { setRegisterInit, setAuthSuccess, setAuthFailure } = actionsAuth;

function useLoginApi() {
  const dispatch = useDispatch();

  async function _reqLoginAdmin(payload) {
    dispatch(setAuthInit(payload));

    try {
      const response = await axios.post(endpoints.storeAdmin, payload);
      dispatch(setAuthSuccess(response?.data));
    } catch (error) {
      dispatch(setAuthFailure(error?.response?.data));
    }
  }

  const actions = {
    reqLoginAdmin: _reqLoginAdmin,
  };

  return actions;
}

export default useLoginApi;
