import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
//
import { clientActions } from "../../../application/actions/client";
import AddClientTemplate from "../../components/templates/AddClientTemplate";
import EditClientTemplate from "../../components/templates/EditClientTemplate";
import ClientListTemplate from "../../components/templates/ClientListTemplate";
import ButtonState from "../../components/atoms/ButtonState";
import TopBar from "../../components/molecules/TopBar";

const { editClientSetId } = clientActions;
function ClientListScreen() {
  const [isOpenAddClientModal, setOpenAddClientModal] = useState(false);
  const [isOpenEditClientModal, setOpenEditClientModal] = useState(false);

  const dispatch = useDispatch();

  function onClickOpenAddClientModalHandle() {
    setOpenAddClientModal((prev) => !prev);
  }

  function onClickOpenEditClientModalHandle(value) {
    setOpenEditClientModal((prev) => !prev);
    dispatch(editClientSetId(value));
  }

  return (
    <Grid>
      <TopBar />

      <Grid item m={4}>
        <ButtonState
          isPrimary
          text="Add Client"
          onClick={onClickOpenAddClientModalHandle}
        />
      </Grid>

      <ClientListTemplate onClickEditModal={onClickOpenEditClientModalHandle} />

      <AddClientTemplate
        isOpenModal={isOpenAddClientModal}
        onClose={onClickOpenAddClientModalHandle}
      />

      <EditClientTemplate
        isOpenModal={isOpenEditClientModal}
        onClose={onClickOpenEditClientModalHandle}
      />
    </Grid>
  );
}

ClientListScreen.displayName = "ClientListScreen";

export default ClientListScreen;
