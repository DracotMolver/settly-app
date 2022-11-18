import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
//
import { actionsClient } from "../../../application/actions/client";
import endpoints from "../../endpoints";

const {
  setClientInit,
  setClientSuccess,
  setClientFailure,
  getClientInit,
  getClientSuccess,
  getClientFailure,
  removeClientInit,
  removeClientSuccess,
  removeClientFailure,
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
      dispatch(setClientSuccess(response?.data));
    } catch (_) {
      dispatch(setClientFailure());
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
      } catch (err) {
        dispatch(getClientFailure());
      }
    }

    mainReqGetClients();

    return () => {
      isMounted = false;
    };
  }, []);

  const _reqRemoveClient = useCallback(async (payload) => {
    dispatch(removeClientInit());

    try {
      const response = await axios.delete(endpoints.deleteClient(payload), {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      dispatch(removeClientSuccess(response?.data));
    } catch (_) {
      dispatch(removeClientFailure());
    }
  }, []);

  const actions = {
    reqAddClient: _reqAddClient,
    reqGetClients: _reqGetClients,
    reqRemoveClient: _reqRemoveClient,
  };

  return actions;
}

export default useClientApi;
