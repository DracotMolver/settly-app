import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//
import proptypes from "./settings/proptypes";
import defaultProps from "./settings/defaultprops";

function Field({ label, onChange, value, required }) {
  let id = "";

  if (label) {
    id = label.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <Grid item xs={12}>
      <TextField
        id={id}
        label={label}
        onChange={onChange}
        value={value}
        required={required}
        variant="standard"
      />
    </Grid>
  );
}

Field.propTypes = proptypes;
Field.defaultProps = defaultProps;
Field.displayName = "displayName";

export default Field;
