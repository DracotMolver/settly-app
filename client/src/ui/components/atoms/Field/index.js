import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//
import proptypes from "./settings/proptypes";
import defaultProps from "./settings/defaultprops";
import { getId } from "./helper";

const Field = forwardRef(
  ({ type, label, onChange, value, required, hasError }, ref) => {
    return (
      <Grid item xs={12}>
        <TextField
          margin="normal"
          id={getId(label)}
          label={label}
          onChange={onChange}
          value={value}
          required={required}
          variant="standard"
          error={hasError}
          fullWidth
          type={type}
          ref={ref}
        />
      </Grid>
    );
  }
);

Field.propTypes = proptypes;
Field.defaultProps = defaultProps;
Field.displayName = "displayName";

export default Field;
