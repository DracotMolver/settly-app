import React from "react";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
//
import LoginTemplate from "../../components/templates/LoginTemplate";
import useAuthSelector from "../../../application/selectors/auth";
import paths from "../../router/paths";

function LoginScreen() {
  const auth = useAuthSelector();

  function _render() {
    let component = (
      <Container maxWidth="sm" pb={3}>
        <LoginTemplate />
      </Container>
    );

    if (auth.isLogged) {
      component = <Navigate to={paths.dashboard} replace />;
    }

    return component;
  }

  return _render();
}

LoginScreen.displayName = "LoginScreen";

export default LoginScreen;
