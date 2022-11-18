import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// 
import defaultProps from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function ButtonState({ isPrimary, isSuccess, disabled, hasError, text ,onPress}) {
  function _getRestOfStates() {
    const otherStates = {};

    if (hasError) {
      otherStates.color = "error";
    } else if (isSuccess) {
      otherStates.color = "success";
    }

    return otherStates;
  }

  return (
    <Grid item mt={3} mb={3}>
      <Button
        variant={isPrimary ? "contained" : "outlined"}
        disabled={disabled}
        onClick={onPress}
        {..._getRestOfStates()}
      >
        {text}
      </Button>
    </Grid>
  );
}

ButtonState.propTypes = proptypes;
ButtonState.defaultProps = defaultProps;
ButtonState.displayName = "ButtonState";

export default ButtonState;
