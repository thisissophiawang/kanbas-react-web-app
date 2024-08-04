//src/Labs/Lab5/EnvironmentVariables.tsx

import React from 'react';

// Access the environment variable
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const EnvironmentVariables = () => {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p>
      <hr/>
    </div>
  );
};

export default EnvironmentVariables;
