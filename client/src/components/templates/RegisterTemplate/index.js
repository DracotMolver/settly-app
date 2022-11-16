import React from "react";
//
import Card from "../../atoms/Card";
import SingUpForm from "../../organisms/SingUpForm";

function RegisterTemplate() {
  return (
    <Card>
      <SingUpForm />
    </Card>
  );
}

RegisterTemplate.displayName = "RegisterTemplate";

export default RegisterTemplate;
