import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import UploadInput from "../../atoms/UploadInput";
import useClientApi from "../../../../infrastructure/apiHooks/useClientApi";

function AddClientForm() {
  const { control, handleSubmit, setValue } = useForm();

  const api = useClientApi();

  return (
    <Grid container item>
      <Controller
        name="name"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field label="Name" required hasError={Boolean(error)} {...field} />
        )}
        defaultValue=""
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
        defaultValue=""
      />
      <Controller
        name="picture"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <UploadInput
            text="Upload Your Picture"
            setValue={setValue}
            {...field}
          />
        )}
        defaultValue=""
      />
      <ButtonState
        text="Add New Client"
        onPress={handleSubmit(api.reqAddClient)}
      />
    </Grid>
  );
}

AddClientForm.displayName = "AddClientForm";

export default AddClientForm;
