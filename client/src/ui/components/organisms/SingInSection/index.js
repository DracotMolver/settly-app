import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import useLoginApi from "../../../../infrastructure/apiHooks/useLoginApi";
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";

function SingInSection() {
  const { control, handleSubmit } = useForm();

  const api = useLoginApi();

  return (
    <Grid container item>
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Email Adress"
            required
            hasError={Boolean(error)}
            {...field}
          />
        )}
        defaultValue=""
      />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Password"
            required
            type="password"
            hasError={Boolean(error)}
            {...field}
          />
        )}
        defaultValue=""
      />
      <ButtonState text="Sign In" onClick={handleSubmit(api.reqLoginAdmin)} />
    </Grid>
  );
}

SingInSection.displayName = "SingInSection";

export default SingInSection;
