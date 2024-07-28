import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables" style={{ margin: '20px', width: '200px' }}>
      <h2>Array State Variable</h2>
      <button 
        onClick={addElement} 
        style={{ backgroundColor: 'green', color: 'white', margin: '5px 0', padding: '10px', border: 'none', cursor: 'pointer' }}
      >
        Add Element
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {array.map((item, index) => (
          <li 
            key={index} 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', border: '1px solid #ddd', margin: '5px 0' }}
          >
            {item}
            <button 
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
