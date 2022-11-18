import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function PopupMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          <MoreVertIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Editar</MenuItem>
            <MenuItem onClick={popupState.close}>Eliminar</MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
}

PopupMenu.displayName = "PopupMenu";

export default PopupMenu;
