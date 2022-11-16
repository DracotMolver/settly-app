import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";

function SingUpSection() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmitSucces(value) {}

  return (
    <Grid container item>
      <Controller
        name="name"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field label="Name" {...field} required hasError={Boolean(error)} />
        )}
      />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Email Address"
            {...field}
            required
            hasError={Boolean(error)}
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
            {...field}
            required
            hasError={Boolean(error)}
          />
        )}
      />
      <Controller
        name="passwordConfirmation"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Repeat Password"
            {...field}
            required
            hasError={Boolean(error)}
          />
        )}
      />
      <ButtonState text="Sign Up" onPress={handleSubmit(onSubmitSucces)} />
    </Grid>
  );
}

SingUpSection.displayName = "SingUpSection";

export default SingUpSection;
