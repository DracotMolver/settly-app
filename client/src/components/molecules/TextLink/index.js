import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
//

function TextLink() {
  return (
    <Grid container item>
      <Link component={LinkRouter} to="/" underline="hover" rel="noreferrer">
        {'underline="hover"'}
      </Link>
    </Grid>
  );
}

TextLink.displayName = "TextLink";

export default TextLink;
