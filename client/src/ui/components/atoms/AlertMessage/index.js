import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
//
import useAlertSelector from "../../../../application/selectors/alert";
import { alertActions } from "../../../../application/actions/alert";

const { setAlertInit } = alertActions;

function AlertMessage() {
  const { open, message, error } = useAlertSelector();

  const dispatch = useDispatch();

  function _onCloseAlertMessageHandle() {
    dispatch(setAlertInit());
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={_onCloseAlertMessageHandle}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={_onCloseAlertMessageHandle}
        severity={error ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {Object.values(message).map((errors) => errors.join("\n"))}
      </Alert>
    </Snackbar>
  );
}

AlertMessage.displayName = "AlertMessage";

export default AlertMessage;
