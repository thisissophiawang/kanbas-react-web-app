import React, { useState } from 'react';

export default function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    return (
        <div>
            <h4>Calculator</h4>
            <input 
                type="number" 
                value={a} 
                onChange={(e) => setA(parseInt(e.target.value))}
            />
            <input 
                type="number" 
                value={b} 
                onChange={(e) => setB(parseInt(e.target.value))}
            />
            <h3>Path Parameters</h3>
            <a href={`http://localhost:4000/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>
            <br />
            <a href={`http://localhost:4000/lab5/subtract/${a}/${b}`}>
                Subtract {a} - {b}
            </a>
        </div>
    );
}
