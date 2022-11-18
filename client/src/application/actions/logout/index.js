import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import { authActions } from "../auth";
import { alertActions } from "../alert";
import { clientActions } from "../client";
import { registerActions } from "../register";
import paths from "../../../ui/router/paths";

const { clearAuthState } = authActions;
const { clearAlertState } = alertActions;
const { clearClientState } = clientActions;
const { clearRegistroState } = registerActions;

function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    window.sessionStorage.removeItem("token");

    dispatch(clearAuthState());
    dispatch(clearAlertState());
    dispatch(clearClientState());
    dispatch(clearRegistroState());

    navigate(paths.login, { replace: true });
  }

  return logout;
}
export default useLogout;
