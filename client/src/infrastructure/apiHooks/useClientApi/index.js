import axios from "axios";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
//
import { actionsClient } from "../../../application/actions/client";
import endpoints from "../../endpoints";

const { setAddClientInit, setAddClientSuccess, setAddClientFailure } =
  actionsClient;

function useClientApi() {
  const TOKEN = window.sessionStorage.getItem("token") || "";

  const dispatch = useDispatch();

  async function _reqAddClient(payload) {
    console.log(payload);
    dispatch(setAddClientInit());

    try {
      const response = await axios.post(endpoints.addClient, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      dispatch(setAddClientSuccess(response?.data));
    } catch (error) {
      dispatch(setAddClientFailure(error?.response?.data));
    }
  }

  const actions = {
    reqAddClient: _reqAddClient,
  };

  return actions;
}

export default useClientApi;
