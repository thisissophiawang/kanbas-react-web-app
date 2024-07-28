import React, { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div style={{ margin: '20px', width: '300px' }}>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
      />
      <hr/>
    </div>
  );
}
