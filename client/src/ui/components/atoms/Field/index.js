import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//
import proptypes from "./settings/proptypes";
import defaultProps from "./settings/defaultprops";

const Field = forwardRef(
  ({ type, label, onChange, value, required, hasError }, ref) => {
    function _getId() {
      let id = "";

      if (label) {
        id = label.toLowerCase().replace(/\s+/g, "-");
      }

      return id;
    }

    return (
      <Grid item xs={12}>
        <TextField
          margin="normal"
          id={_getId()}
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
