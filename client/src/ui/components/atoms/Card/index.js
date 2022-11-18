import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Card({ children }) {
  return (
    <Paper elevation={1}>
      <Box p={4}>{children}</Box>
    </Paper>
  );
}

Card.displayName = "displayName";

export default Card;
