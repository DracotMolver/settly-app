import axios from "axios";
import { useDispatch } from "react-redux";
//
import endpoints from "../../endpoints";
import { actionsRegister } from "../../redux/features/register";

const { setAdminInit, setAdminSuccess, setAdminFailure } = actionsRegister;

function useAdminApi() {
  const dispatch = useDispatch();

  async function _reqSetAdmin(payload) {
    dispatch(setAdminInit(payload));

    try {
      const response = await axios.post(endpoints.storeAdmin, payload);
      dispatch(setAdminSuccess(response));
    } catch (error) {
      dispatch(setAdminFailure(error));
    }
  }

  const actions = {
    reqSetAdmin: _reqSetAdmin,
  };

  return actions;
}

export default useAdminApi;
