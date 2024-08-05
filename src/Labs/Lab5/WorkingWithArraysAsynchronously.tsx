import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FaPlusCircle } from "react-icons/fa";
import './WorkingWithArraysAsynchronously.css';

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error removing todo", error);
    }
  };

  const createTodo = async () => {
    try {
      const todos = await client.createTodo();
      setTodos(todos);
    } catch (error) {
      console.error("Error creating todo", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays" className="container mt-3">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>Todos</h4>
      <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input me-2"
                defaultChecked={todo.completed}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeTodo(todo)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
