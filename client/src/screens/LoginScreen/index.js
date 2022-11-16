import React from "react";
import Container from "@mui/material/Container";
//
import LoginTemplate from "../../components/templates/LoginTemplate";

function LoginScreen() {
  return (
    <Container maxWidth="sm">
      <LoginTemplate />
    </Container>
  );
}

LoginScreen.displayName = "LoginScreen";

export default LoginScreen;
