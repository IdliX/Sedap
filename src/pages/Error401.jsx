import React from "react";
import ErrorLayout from "../layouts/ErrorLayout";
import errorImage from "../assets/image3.png";

const Error401 = () => {
  return (
    <ErrorLayout
      description="Unauthorized. You must authenticate yourself to get the requested response."
      errorImage={errorImage}
    />
  );
};

export default Error401;
