import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import UploadInput from "../../atoms/UploadInput";
import useClientApi from "../../../../infrastructure/apiHooks/useClientApi";

function AddClientForm({ onCloseModal }) {
  const { control, handleSubmit, setValue } = useForm();

  const api = useClientApi();

  function _onSubmitSuccessHandle() {
    api.reqAddClient();
    onCloseModal();
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
        onClick={handleSubmit(_onSubmitSuccessHandle)}
      />
    </Grid>
  );
}

AddClientForm.defaultProps = defaultprops;
AddClientForm.propTypes = proptypes;
AddClientForm.displayName = "AddClientForm";

export default AddClientForm;
