import React from "react";
//
import SingInSection from "../../organisms/SingInSection";
import TextLink from "../../molecules/TextLink";
import Card from "../../atoms/Card";

function LoginTemplate() {
  return (
    <Card>
      <SingInSection />
      <TextLink helpText="No account yet?" linkText="Create one here." />
    </Card>
  );
}

LoginTemplate.displayName = "LoginTemplate";

export default LoginTemplate;
