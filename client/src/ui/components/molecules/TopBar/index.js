import React from "react";
import { redirect } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//
import paths from "../../../router/paths";

function TopBar() {
  function _logout() {
    window.sessionStorage.removeItem("token");
    return redirect(paths.login);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Hi Diego.replace. Welcome to your admin account
          </Typography>
        </Toolbar>
        <Button color="inherit" onClick={_logout}>
          Log out
        </Button>
      </AppBar>
    </Box>
  );
}

TopBar.displayName = "TopBar";

export default TopBar;
