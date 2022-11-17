import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import useRegisterApi from "../../../services/apiHooks/userRegisterApi";
import useRegisterSelector from "../../../services/selectors/register";

function SingUpForm() {
  const { control, handleSubmit, reset } = useForm();

  const { isRegistered } = useRegisterSelector();
  const api = useRegisterApi();

  // Reset the form and the state
  useEffect(() => {
    if (isRegistered) {
      reset();
    }
  }, [isRegistered]);

  return (
    <Grid container item>
      <Controller
        name="name"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field label="Name" required hasError={Boolean(error)} {...field} />
        )}
        defaultValues=""
      />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Email Address"
            required
            type="email"
            hasError={Boolean(error)}
            {...field}
          />
        )}
        defaultValues=""
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
        defaultValues=""
      />
      <Controller
        name="password_confirmation"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field
            label="Confirm Password"
            required
            type="password"
            hasError={Boolean(error)}
            {...field}
          />
        )}
        defaultValues=""
      />
      <ButtonState
        text="Sign Up"
        onPress={handleSubmit(api.reqRegisterAdmin)}
      />
    </Grid>
  );
}

SingUpForm.displayName = "SingUpForm";

export default SingUpForm;
