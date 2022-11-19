import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
//
import SingInSection from "../../organisms/SingInSection";
import TextLink from "../../molecules/TextLink";
import Card from "../../atoms/Card";
import paths from "../../../router/paths";

function LoginTemplate() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Card>
      <SingInSection />
      {/* TODO: MOVE THIS KEY TO AN ENV VARIABLE FIL. FOR THIS PROJECT JUST KEEP IT HERE BECAUSE IT IS JUST THE TEST KEY THAT GOOGLE OFFERS :) */}
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
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
