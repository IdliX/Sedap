import React from "react";
import ErrorLayout from "../layouts/ErrorLayout";
import errorImage from "../assets/image2.png";

const Error400 = () => {
  return (
    <ErrorLayout
      description="Bad Request. The server could not understand the request due to invalid syntax."
      errorImage={errorImage}
    />
  );
};

export default Error400;
