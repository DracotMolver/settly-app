import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";

function SingInSection() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmitSucces(value) {}

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
      />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Password"
            required
            hasError={Boolean(error)}
            {...field}
          />
        )}
      />
      <ButtonState text="Sign In" onPress={handleSubmit(onSubmitSucces)} />
    </Grid>
  );
}

SingInSection.displayName = "SingInSection";

export default SingInSection;
