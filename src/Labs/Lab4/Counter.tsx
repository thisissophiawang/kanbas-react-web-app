import React, { useState } from "react";

export default function Counter() {
  //let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
          id="wd-counter-up-click"
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Up
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log(count);
          }}
          id="wd-counter-down-click"
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Down
        </button>
      </div>
      <hr />
    </div>
  );
}
