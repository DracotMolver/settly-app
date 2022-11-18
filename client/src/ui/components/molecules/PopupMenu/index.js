import React, { Fragment, useCallback } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
//
import defaultProps from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function PopupMenu({ onDelete, onEdit }) {
  const _onDeleteHandle = useCallback((popupState) => {
    if (onDelete && typeof onDelete === "function") {
      onDelete();
    }

    popupState.close();
  }, []);

  const _onEditHandle = useCallback((popupState) => {
    if (onEdit && typeof onEdit === "function") {
      onEdit();
    }

    popupState.close();
  }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={_onDeleteHandle.bind(null, popupState)}>
              Editar
            </MenuItem>
            <MenuItem onClick={_onEditHandle.bind(null, popupState)}>
              Eliminar
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
}

PopupMenu.defaultProps = defaultProps;
PopupMenu.propTypes = proptypes;
PopupMenu.displayName = "PopupMenu";

export default PopupMenu;
