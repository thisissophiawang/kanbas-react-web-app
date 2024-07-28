import React, { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);

  return (
    <div id="wd-boolean-state-variables" style={{ margin: '20px', width: '300px' }}>
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control" style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          checked={done}
          onChange={() => setDone(!done)} 
          style={{ marginRight: '10px' }} 
        /> 
        Done
      </label>
      {done && <div className="alert alert-success" style={{ marginTop: '10px' }}>
        Yay! you are done
      </div>}
      <hr/>
    </div>
  );
}
