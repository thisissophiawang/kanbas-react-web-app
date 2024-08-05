import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const API = `${REMOTE_SERVER}/a5/todos`;

    return (
        <div className="container mt-3">
            <h3>Working with Arrays</h3>
            <div className="text-start">
                <h4>Creating new Items in an Array</h4>
                <a className="btn btn-primary mb-2" href={`${API}/create`}>
                    Create Todo
                </a>
                <h4>Filtering Array Items</h4>
                <a className="btn btn-primary mb-2" href={`${API}?completed=true`}>
                    Get Completed Todos
                </a>
                <h4>Deleting from an Array</h4>
                <div className="input-group mb-2">
                    <input
                        className="form-control"
                        value={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                        placeholder="Enter Todo ID"
                    />
                    <a className="btn btn-primary ms-2" href={`${API}/${todo.id}/delete`}>
                        Delete Todo with ID = {todo.id}
                    </a>
                </div>
                <h4>Retrieving an Item from an Array by ID</h4>
                <div className="input-group mb-2">
                    <input
                        className="form-control"
                        value={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                        placeholder="Enter Todo ID"
                    />
                    <a className="btn btn-primary ms-2" href={`${API}/${todo.id}`}>
                        Get Todo by ID
                    </a>
                </div>
                <h4>Retrieving Arrays</h4>
                <a className="btn btn-primary mb-2" href={API}>
                    Get Todos
                </a>
                <h4>Updating an Item in an Array</h4>
                <div className="input-group mb-2">
                    <input
                        className="form-control w-25 float-start me-2"
                        value={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                        placeholder="Enter Todo ID"
                    />
                    <input
                        className="form-control w-50 float-start"
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                        placeholder="Enter Todo Title"
                    />
                    <a className="btn btn-primary float-end ms-2" href={`${API}/${todo.id}/title/${todo.title}`}>
                        Update Todo
                    </a>
                </div>
                <h4>Updating Description and Completed Status</h4>
                <div className="input-group mb-2">
                    <input
                        className="form-control w-50 float-start me-2"
                        value={todo.description}
                        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                        placeholder="Enter Todo Description"
                    />
                    <a className="btn btn-primary float-end ms-2" href={`${API}/${todo.id}/description/${todo.description}`}>
                        Update Description
                    </a>
                </div>
                <div className="input-group mb-2">
                    <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={todo.completed}
                        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
                    />
                    <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`}>
                        Update Completed
                    </a>
                </div>
            </div>
        </div>
    );
}
