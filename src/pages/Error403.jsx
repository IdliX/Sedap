import React from "react";
import ErrorLayout from "../layouts/ErrorLayout";
import errorImage from "../assets/image.png";

const Error403 = () => {
  return (
    <ErrorLayout
      description="Forbidden. You do not have permission to access this resource."
      errorImage={errorImage}
    />
  );
};

export default Error403;
