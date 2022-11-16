import React from "react";
import Grid from "@mui/material/Grid";
//
import TopBar from "../../molecules/TopBar";
import ListDetail from "../../organisms/ListDetail";
import ButtonState from "../../atoms/ButtonState";

function ClientListTemplate() {
  return (
    <Grid>
      <TopBar />
      <Grid item m={4}>
        <ButtonState isPrimary text="Add Client" onPress={() => {}} />
        <ListDetail />
      </Grid>
    </Grid>
  );
}

ClientListTemplate.displayName = "ClientListTemplate";

export default ClientListTemplate;
