import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
//
import defaultProps from "./settings/defaultprops";
import proptypes from "./settings/proptypes";
import { getRestOfStates } from "./helper";

function ButtonState({
  isPrimary,
  isSuccess,
  disabled,
  hasError,
  text,
  onClick,
}) {
  return (
    <Grid item mt={3} mb={3}>
      <Button
        variant={isPrimary ? "contained" : "outlined"}
        disabled={disabled}
        onClick={onClick}
        {...getRestOfStates(hasError, isSuccess)}
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
