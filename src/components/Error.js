import React from 'react'
import {useRouteError } from 'react-router'

const Error = () => {
  const err = useRouteError();
  console.error(err);
  
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h2>We couldn't find the page you were looking for.</h2>
      <h3>
        Error: {err.status}:{err.statusText}</h3>
        <p>Please check the URL or return to the home page.</p>
      <a href="/">Go to Home</a>
      <p>If the problem persists, please contact support.</p>

        
    </div>
  )
}

export default Error
