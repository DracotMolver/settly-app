import React from "react";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";

function SingInSection() {
  return (
    <Grid container item>
      <Field label="Email Adress" />
      <Field label="Password" />
      <ButtonState text="Sign In" />
    </Grid>
  );
}

SingInSection.displayName = "SingInSection";

export default SingInSection;
