import React, { useEffect } from "react";
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

  useEffect(() => {
    let timer = null;
    let isMounted = true;

    if (open && !error) {
      timer = setTimeout(() => {
        _onCloseAlertMessageHandle();
        clearTimeout(timer);
      }, 3000);
    }

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [open, error]);

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
        {Object.values(message)
          .flat()
          .map((errorMessage) => errorMessage)}
      </Alert>
    </Snackbar>
  );
}

AlertMessage.displayName = "AlertMessage";

export default AlertMessage;
