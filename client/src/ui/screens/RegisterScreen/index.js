import React from "react";
import Container from "@mui/material/Container";
//
import RegisterTemplate from "../../components/templates/RegisterTemplate";

function RegisterScreen() {
  return (
    <Container maxWidth="sm">
      <RegisterTemplate />
    </Container>
  );
}

RegisterScreen.displayName = "RegisterScreen";

export default RegisterScreen;
