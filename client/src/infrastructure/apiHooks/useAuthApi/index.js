import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
//
import endpoints from "../../endpoints";
import { authActions } from "../../../application/actions/auth";

const { getAuthUserInit, getAuthUserSuccess } = authActions;

function useAuthApi() {
  const TOKEN = window.sessionStorage.getItem("token") || "";

  const dispatch = useDispatch();

  const _reqGetAuthUser = useCallback(() => {
    let isMounted = true;

    async function mainReqGetAuthUser() {
      dispatch(getAuthUserInit());

      try {
        if (isMounted) {
          const response = await axios.get(endpoints.getAuthUser, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });

          dispatch(getAuthUserSuccess(response.data));
        }
      } catch (_) {}
    }

    mainReqGetAuthUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const actions = {
    reqGetAuthUser: _reqGetAuthUser,
  };

  return actions;
}

export default useAuthApi;
