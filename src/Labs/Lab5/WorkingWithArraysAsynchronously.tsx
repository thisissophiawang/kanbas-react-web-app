import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrash, FaTimes } from "react-icons/fa";
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

  const postTodo = async () => {
    try {
      console.log("Attempting to post a new todo");
      const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
      console.log("New todo posted successfully:", newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Error posting new todo:", error);
    }
  };

  const deleteTodo = async (todoId: any) => {
    try {
      console.log("Attempting to delete todo", todoId);
      await client.deleteTodo(todoId);
      const newTodos = todos.filter((t) => t.id !== todoId);
      setTodos(newTodos);
    } catch (error) {
      console.error("Error deleting todo", error);
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
      <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
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
            <div>
              <FaTrash onClick={() => removeTodo(todo)} className="text-danger float-end mt-1 me-2" id="wd-remove-todo" />
              <FaTimes onClick={() => deleteTodo(todo.id)} className="text-danger float-end fs-3 me-2" id="wd-delete-todo" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
