import axios from "axios";
import { useDispatch } from "react-redux";
//
import { actionsRegister } from "../../../application/actions/register";
import endpoints from "../../endpoints";

const { setRegisterInit, setRegisterSuccess, setRegisterFailure } = actionsRegister;

function useRegisterApi() {
  const dispatch = useDispatch();

  async function _reqRegisterAdmin(payload) {
    dispatch(setRegisterInit(payload));

    try {
      const response = await axios.post(endpoints.registerAdmin, payload);
      dispatch(setRegisterSuccess(response?.data));
    } catch (error) {
      dispatch(setRegisterFailure(error?.response?.data));
    }
  }

  const actions = {
    reqRegisterAdmin: _reqRegisterAdmin,
  };

  return actions;
}

export default useRegisterApi;
