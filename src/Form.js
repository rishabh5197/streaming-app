import React, { useState } from "react";
import FormSignup from "./formsignup";
import FormSuccess from "./formSuccess";
// import ReactDOM from "react-dom";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {/* <FormSignup /> */}
      
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      {/* console.log("is submitted "+ isSubmitted); */}
    </>
  );
  console.log(!isSubmitted);
};

export default Form;