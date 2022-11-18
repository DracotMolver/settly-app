import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
//
import useClientApi from "../../../../infrastructure/apiHooks/useClientApi";
import Field from "../../atoms/Field";
import ButtonState from "../../atoms/ButtonState";
import UploadInput from "../../atoms/UploadInput";
import defaultprops, { ON_CREATE } from "./settings/defaultprops";
import proptypes from "./settings/proptypes";
import useClientSelector from "../../../../application/selectors/client";

function ClientForm({ onCloseModal, actionOn }) {
  const { control, handleSubmit, setValue } = useForm();

  const { client } = useClientSelector();
  const api = useClientApi();

  function _onSubmitSuccessHandle(value) {
    actionOn === ON_CREATE
      ? api.reqAddClient(value)
      : api.reqEditClient({ ...client, ...value });
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
        defaultValue={client?.name || ""}
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
        defaultValue={client?.email || ""}
      />
      <Controller
        name="picture"
        control={control}
        render={({ field }) => (
          <UploadInput
            text="Upload Your Picture"
            setValue={setValue}
            imgSrc={client?.picture || ""}
            {...field}
          />
        )}
      />
      <ButtonState
        text={actionOn === ON_CREATE ? "Add new client" : "Edit client"}
        onClick={handleSubmit(_onSubmitSuccessHandle)}
      />
    </Grid>
  );
}

ClientForm.defaultProps = defaultprops;
ClientForm.propTypes = proptypes;
ClientForm.displayName = "ClientForm";

export default ClientForm;
