import React from "react";
import Grid from "@mui/material/Grid";
//
import ListDetail from "../../organisms/ListDetail";
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function ClientListTemplate({ onClickEditModal }) {
  return (
    <Grid item m={4}>
      <ListDetail onClickEditModal={onClickEditModal} />
    </Grid>
  );
}

ClientListTemplate.defaultProps = defaultprops;
ClientListTemplate.propTypes = proptypes;
ClientListTemplate.displayName = "ClientListTemplate";

export default ClientListTemplate;
