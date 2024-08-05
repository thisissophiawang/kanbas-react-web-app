import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    return (
        <div>
            <h4>Calculator</h4>
            <input 
                className="form-control mb-2"
                type="number" 
                value={a} 
                onChange={(e) => setA(parseInt(e.target.value))}
                placeholder="Enter value for a"
            />
            <input 
                className="form-control mb-2"
                type="number" 
                value={b} 
                onChange={(e) => setB(parseInt(e.target.value))}
                placeholder="Enter value for b"
            />
            <h3>Path Parameters</h3>
            <a className="btn btn-primary m-1" href={`http://localhost:4000/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-danger m-1" href={`http://localhost:4000/lab5/subtract/${a}/${b}`}>
                Subtract {a} - {b}
            </a>
            <h3>Query Parameters</h3>
            <a className="btn btn-primary m-1" href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-danger m-1" href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Subtract {a} - {b}
            </a>
        </div>
    );
}
