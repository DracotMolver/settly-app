import React, { forwardRef, useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import UploadFileIcon from "@mui/icons-material/UploadFile";
//
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";
import { remoteAssets } from "../../../../infrastructure/endpoints";

const UploadInput = forwardRef(({ text, setValue, name, imgSrc }, ref) => {
  const [resultImage, setResultImage] = useState(imgSrc);

  const onClickFileUploadHandle = useCallback((event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (evt) => {
        if (evt?.target?.result) {
          const { result } = evt.target;

          setResultImage(result?.toString());
        }
      };

      reader.readAsDataURL(file);

      setValue(name, file);
    }
  }, []);

  useEffect(() => {
    if (imgSrc) {
      setResultImage(remoteAssets.img(imgSrc));
    }
  }, [imgSrc]);

  return (
    <Grid item mt={3} mb={3} xs={12}>
      <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ marginRight: "1rem" }}
      >
        {text}
        <input
          type="file"
          accept=".jpge,.jpg,.png,.webp"
          hidden
          onChange={onClickFileUploadHandle}
          ref={ref}
        />
      </Button>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
        xs={12}
      >
        <Grid item>
          <Avatar src={resultImage} sx={{ width: 56, height: 56 }} />
        </Grid>
      </Grid>
    </Grid>
  );
});

UploadInput.defaultProps = defaultprops;
UploadInput.propTypes = proptypes;
UploadInput.displayName = "UploadInput";

export default UploadInput;
