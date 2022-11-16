import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi Diego.replace. Welcome to your admin account
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

TopBar.displayName = "TopBar";

export default TopBar;
