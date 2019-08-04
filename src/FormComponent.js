import React from "react";

const FormComponent = ({ control, ...props }) => {
  const Component = control;
  return <Component {...props} />;
};

export default FormComponent;
