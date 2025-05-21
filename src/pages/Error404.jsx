import React from "react";
import ErrorLayout from "../layouts/ErrorLayout";
import errorImage from "../assets/image1.png";

const Error404 = () => {
  return (
    <ErrorLayout
      description="Not Found. The page you are looking for might have been removed or temporarily unavailable."
      errorImage={errorImage} 
    />
  );
};

export default Error404;
