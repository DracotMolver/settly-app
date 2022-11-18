import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
//
import { clientActions } from "../../../application/actions/client";
import { alertActions } from "../../../application/actions/alert";
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
  editClientSuccess,
  editClientFailure,
} = clientActions;

const { setAlertInit, setAlertSuccess, setAlertFailure } = alertActions;

function useClientApi() {
  const TOKEN = window.sessionStorage.getItem("token") || "";

  const dispatch = useDispatch();

  const _reqAddClient = useCallback(async (payload) => {
    dispatch(setClientInit());
    dispatch(setAlertInit());

    try {
      const response = await axios.post(endpoints.addClient, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      dispatch(setClientSuccess(response.data));
      dispatch(setAlertSuccess(["Client added Successfully!"]));
    } catch (error) {
      dispatch(setAlertFailure(error.response.data));
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

          dispatch(getClientSuccess(response.data));
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
    dispatch(setClientInit());
    dispatch(removeClientInit());
    dispatch(setAlertInit());

    try {
      const response = await axios.delete(endpoints.deleteClient(payload), {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      dispatch(removeClientSuccess(response.data));
      dispatch(setAlertSuccess(["Client removed Successfully!"]));
    } catch (error) {
      dispatch(setAlertFailure(error.response.data));
      dispatch(removeClientFailure());
    }
  }, []);

  const _reqEditClient = useCallback(async (payload) => {
    dispatch(setAlertInit());

    try {
      const { id, ...params } = payload;
      const response = await axios.post(endpoints.editClient(id), params, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      console.log(response);
      dispatch(editClientSuccess(response.data));
      dispatch(setAlertSuccess(["Client updated Successfully!"]));
    } catch (error) {
      dispatch(setAlertFailure(error.response.data));
      dispatch(editClientFailure());
    }
  }, []);

  const actions = {
    reqAddClient: _reqAddClient,
    reqGetClients: _reqGetClients,
    reqRemoveClient: _reqRemoveClient,
    reqEditClient: _reqEditClient,
  };

  return actions;
}

export default useClientApi;
