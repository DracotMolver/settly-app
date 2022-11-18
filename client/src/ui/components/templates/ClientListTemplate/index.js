import React from "react";
import Grid from "@mui/material/Grid";
//
import ListDetail from "../../organisms/ListDetail";

function ClientListTemplate() {
  return (
    <Grid item m={4}>
      <ListDetail />
    </Grid>
  );
}

ClientListTemplate.displayName = "ClientListTemplate";

export default ClientListTemplate;
