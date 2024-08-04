import { useState } from "react";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({ id: "1" });
    const API = "http://localhost:4000/a5/todos";

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input 
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                placeholder="Enter Todo ID"
            />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <h4>Retrieving Arrays</h4>
            <a href={API}>Get Todos</a>
        </div>
    );
}

export default WorkingWithArrays;
