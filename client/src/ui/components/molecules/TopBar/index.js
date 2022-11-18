import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Hi Diego.replace. Welcome to your admin account
          </Typography>
        </Toolbar>
        <Button color="inherit">Log out</Button>
      </AppBar>
    </Box>
  );
}

TopBar.displayName = "TopBar";

export default TopBar;
