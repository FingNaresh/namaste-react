import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <h2 className="text-xl text-gray-700 mb-2">We couldn't find the page you were looking for.</h2>
      <h3 className="text-lg text-gray-500 mb-4">
        Error: {err?.status || '404'} {err?.statusText || 'Not Found'}
      </h3>
      <p className="text-gray-600 mb-6">Please check the URL or return to the home page.</p>
      <a 
        href="/" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
      >
        Go to Home
      </a>
      <p className="text-gray-500 mt-6">If the problem persists, please contact support.</p>
    </div>
  );
}

export default Error;
