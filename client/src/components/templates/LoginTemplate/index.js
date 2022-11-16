import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
//
import SingInSection from "../../organisms/SingInSection";

function LoginTemplate() {
  return (
    <Paper elevation={1}>
      <Box p={4}>
        <SingInSection />
      </Box>
    </Paper>
  );
}

LoginTemplate.displayName = "LoginTemplate";

export default LoginTemplate;
