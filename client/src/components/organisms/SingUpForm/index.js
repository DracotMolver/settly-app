import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import useAdminApi from "../../../services/apiHooks/useAdminApi";

function SingUpForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const api = useAdminApi();

  function onSubmitSucces(value) {
    api.reqSetAdmin(value);
  }

  return (
    <Grid container item>
      <Controller
        name="name"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field label="Name" required hasError={Boolean(error)} {...field} />
        )}
      />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Email Address"
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
      <Controller
        name="passwordConfirmation"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Repeat Password"
            required
            hasError={Boolean(error)}
            {...field}
          />
        )}
      />
      <ButtonState text="Sign Up" onPress={handleSubmit(onSubmitSucces)} />
    </Grid>
  );
}

SingUpForm.displayName = "SingUpForm";

export default SingUpForm;
