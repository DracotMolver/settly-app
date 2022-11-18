import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
//
import { actionsClient } from "../../../application/actions/client";
import endpoints from "../../endpoints";

const {
  setClientInit,
  addClientSuccess,
  addClientFailure,
  getClientInit,
  getClientSuccess,
  getClientFailure,
} = actionsClient;

function useClientApi() {
  const TOKEN = window.sessionStorage.getItem("token") || "";

  const dispatch = useDispatch();

  const _reqAddClient = useCallback(async (payload) => {
    dispatch(setClientInit());

    try {
      const response = await axios.post(endpoints.addClient, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      dispatch(addClientSuccess(response?.data));
    } catch (error) {
      dispatch(addClientFailure(error?.response?.data));
    }
  }, []);

  const _reqGetClients = useCallback(() => {
    let isMounted = true;

    async function mainReqGetClients() {
      dispatch(getClientInit());

      try {
        if (isMounted) {
          const response = await axios.get(endpoints.getClients, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });

          dispatch(getClientSuccess(response?.data));
        }
      } catch (error) {
        dispatch(getClientFailure(error?.response?.data));
      }
    }

    mainReqGetClients();

    return () => {
      isMounted = false;
    };
  }, []);

  const actions = {
    reqAddClient: _reqAddClient,
    reqGetClients: _reqGetClients,
  };

  return actions;
}

export default useClientApi;
