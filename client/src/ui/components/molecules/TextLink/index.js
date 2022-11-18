import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
//
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function TextLink({ helpText, linkText, to }) {
  return (
    <Grid container item>
      {helpText && (
        <Typography paragraph gutterBottom mr={1}>
          {helpText}
        </Typography>
      )}
      <Link component={LinkRouter} to={to} underline="hover" rel="noreferrer">
        {linkText}
      </Link>
    </Grid>
  );
}

TextLink.deafultProps = defaultprops;
TextLink.protoTypes = proptypes;
TextLink.displayName = "TextLink";

export default TextLink;
