import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//
import useAuthApi from "../../../../infrastructure/apiHooks/useAuthApi";
import useLogout from "../../../../application/actions/logout";
import useAuthSelector from "../../../../application/selectors/auth";

function TopBar() {
  const { userName } = useAuthSelector();
  const logout = useLogout();

  const api = useAuthApi();

  useEffect(api.reqGetAuthUser, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            {`Hi ${userName}. Welcome to your admin account`}
          </Typography>
        </Toolbar>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </AppBar>
    </Box>
  );
}

TopBar.displayName = "TopBar";

export default TopBar;
