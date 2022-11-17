import axios from "axios";
import { useDispatch } from "react-redux";
//
import endpoints from "../../endpoints";
import { actionsRegister } from "../../redux/features/register";

const { setRegisterInit, setRegisterSuccess, setRegisterFailure } = actionsRegister;

function useRegisterApi() {
  const dispatch = useDispatch();

  async function _reqRegisterAdmin(payload) {
    dispatch(setRegisterInit(payload));

    try {
      const response = await axios.post(endpoints.storeAdmin, payload);
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
