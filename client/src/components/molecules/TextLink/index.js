import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
//
import defaultprops from "./settings/defaultprops";

function TextLink({ helpText, linkText }) {
  return (
    <Grid container item>
      {helpText && (
        <Typography paragraph gutterBottom mr={1}>
          {helpText}
        </Typography>
      )}
      <Link component={LinkRouter} to="/sing-up" underline="hover" rel="noreferrer">
        {linkText}
      </Link>
    </Grid>
  );
}

TextLink.deafultProps = defaultprops;
TextLink.displayName = "TextLink";

export default TextLink;
