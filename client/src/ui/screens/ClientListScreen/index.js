import React, { useState } from "react";
import Grid from "@mui/material/Grid";
//
import AddClientTemplate from "../../components/templates/AddClientTemplate";
import ClientListTemplate from "../../components/templates/ClientListTemplate";
import ButtonState from "../../components/atoms/ButtonState";
import TopBar from "../../components/molecules/TopBar";

function ClientListScreen() {
  const [isOpenModal, setIsOpenModal] = useState();

  function onPressOpenModalHandle() {
    setIsOpenModal((prev) => !prev);
  }

  return (
    <Grid>
      <TopBar />

      <Grid item m={4}>
        <ButtonState
          isPrimary
          text="Add Client"
          onPress={onPressOpenModalHandle}
        />
      </Grid>

      <ClientListTemplate onPressOpenModalHandle={onPressOpenModalHandle} />

      <AddClientTemplate
        isOpenModal={isOpenModal}
        onClose={onPressOpenModalHandle}
      />
    </Grid>
  );
}

ClientListScreen.displayName = "ClientListScreen";

export default ClientListScreen;
