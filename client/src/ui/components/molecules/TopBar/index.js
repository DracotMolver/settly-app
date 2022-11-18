import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//
import { setLogout } from "../../../../application/actions/logout";
import paths from "../../../router/paths";
import useAuthSelector from "../../../../application/selectors/auth";

function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userName } = useAuthSelector();

  function _logout() {
    window.sessionStorage.removeItem("token");
    dispatch(setLogout());
    navigate(paths.login, { replace: true });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
           {`Hi ${userName}. Welcome to your admin account`}
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
