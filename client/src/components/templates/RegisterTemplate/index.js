import React from "react";
//
import Card from "../../atoms/Card";
import SingUpSection from "../../organisms/SingUpSection";

function RegisterTemplate() {
  return (
    <Card>
      <SingUpSection />
    </Card>
  );
}

RegisterTemplate.displayName = "RegisterTemplate";

export default RegisterTemplate;
