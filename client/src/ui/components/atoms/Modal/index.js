import React from "react";
import ModalMUI from "@mui/material/Modal";
import Box from "@mui/material/Box";
//
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";
import styles from "./styles";

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalMUI open={isOpen} onClose={onClose}>
      <Box sx={styles}>{children}</Box>
    </ModalMUI>
  );
}

Modal.defaultProps = defaultprops;
Modal.propTypes = proptypes;
Modal.displayName = "Modal";

export default Modal;
