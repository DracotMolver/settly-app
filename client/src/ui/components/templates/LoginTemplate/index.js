import React from "react";
import Grid from "@mui/material/Grid";
//
import SingInSection from "../../organisms/SingInSection";
import TextLink from "../../molecules/TextLink";
import Card from "../../atoms/Card";
import paths from "../../../router/paths";

function LoginTemplate() {
  return (
    <Card>
      <SingInSection />
      <TextLink
        helpText="No account yet?"
        linkText="Create one here."
        to={paths.signUp}
      />
    </Card>
  );
}

LoginTemplate.displayName = "LoginTemplate";

export default LoginTemplate;
