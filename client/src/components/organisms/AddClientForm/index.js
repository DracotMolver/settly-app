import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import UploadInput from "../../atoms/UploadInput";

function AddClientForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      picture: "",
    },
  });

  function onSubmitSucces(value) {
    /*
    const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:5000/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));*/
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
        name="picture"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <UploadInput
            text="Upload Your Picture"
            hasError={Boolean(error)}
            {...field}
          />
        )}
      />
      <ButtonState
        text="Add New Client"
        onPress={handleSubmit(onSubmitSucces)}
      />
    </Grid>
  );
}

AddClientForm.displayName = "AddClientForm";

export default AddClientForm;
