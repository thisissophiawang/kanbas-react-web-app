import React from 'react';
import Math from './Math';

const MathComponent: React.FC = () => {
  const a = 10;
  const b = 5;

  return (
    <div>
      <h3>Math Operations</h3>
      <p>{a} + {b} = {Math.add(a, b)}</p>
      <p>{a} - {b} = {Math.subtract(a, b)}</p>
      <p>{a} * {b} = {Math.multiply(a, b)}</p>
      <p>{a} / {b} = {Math.divide(a, b)}</p>
    </div>
  );
}

export default MathComponent;
