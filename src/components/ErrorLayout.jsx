import React from "react";
import { useNavigate } from 'react-router-dom';
const ErrorPage = ({ errorCode, description, errorImage }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="text-center mt-40">
        <img
          src={errorImage}
          alt="Error"
          className="mx-auto mb-2 w-100 h-64 object-cover"
        />
        <h1 className="text-4xl font-semibold text-red-500">{errorCode}</h1>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
