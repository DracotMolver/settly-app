import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//
import proptypes from "./settings/proptypes";
import defaultProps from "./settings/defaultprops";

const Field = forwardRef(({ label, onChange, value, required, hasError }, ref) => {
  let id = "";

  if (label) {
    id = label.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <Grid item xs={12}>
      <TextField
        margin="normal"
        id={id}
        label={label}
        onChange={onChange}
        value={value}
        required={required}
        variant="standard"
        error={hasError}
        fullWidth
        ref={ref}
      />
    </Grid>
  );
});

Field.propTypes = proptypes;
Field.defaultProps = defaultProps;
Field.displayName = "displayName";

export default Field;
