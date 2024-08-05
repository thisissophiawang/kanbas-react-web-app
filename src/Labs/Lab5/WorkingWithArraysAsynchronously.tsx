import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrash, FaTimes, FaPencilAlt } from "react-icons/fa";
import './WorkingWithArraysAsynchronously.css';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      if (Array.isArray(todos)) {
        setTodos(todos);
      } else {
        console.error("Fetched todos is not an array:", todos);
      }
    } catch (error: any) {
      console.error("Error fetching todos", error);
      setErrorMessage(error.response?.data?.message || "Error fetching todos");
    }
  };

  const removeTodo = async (todo: Todo) => {
    try {
      await client.removeTodo(todo.id);
      const updatedTodos = todos.filter(t => t.id !== todo.id);
      setTodos(updatedTodos);
    } catch (error: any) {
      console.error("Error removing todo", error);
      setErrorMessage(error.response?.data?.message || "Error removing todo");
    }
  };

  const createTodo = async () => {
    try {
      const newTodo = await client.createTodo();
      if (newTodo) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      }
    } catch (error: any) {
      console.error("Error creating todo", error);
      setErrorMessage(error.response?.data?.message || "Error creating todo");
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error: any) {
      console.error("Error posting new todo", error);
      setErrorMessage(error.response?.data?.message || "Error posting new todo");
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      await client.deleteTodo(todoId);
      const newTodos = todos.filter((t) => t.id !== todoId);
      setTodos(newTodos);
    } catch (error: any) {
      console.error("Error deleting todo", error);
      setErrorMessage(error.response?.data?.message || "Error deleting todo");
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      const updatedTodos = todos.map(t => t.id === todo.id ? todo : t);
      setTodos(updatedTodos);
    } catch (error: any) {
      console.error("Error updating todo", error);
      setErrorMessage(error.response?.data?.message || "Error updating todo");
    }
  };

  const editTodo = (todo: Todo) => {
    const updatedTodos = todos.map(t => t.id === todo.id ? { ...t, editing: true } : t);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays" className="container mt-3">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
        <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input me-2"
                defaultChecked={todo.completed}
                onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
              />
              {todo.editing ? (
                <input
                  className="form-control w-50 float-start"
                  defaultValue={todo.title}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, title: (e.target as HTMLInputElement).value, editing: false });
                    }
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodo({ ...todo, title: e.target.value })}
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <div>
            <FaTrash onClick={() => removeTodo(todo)} className="text-danger float-end mt-1 me-2" id="wd-remove-todo" />
              <FaTimes onClick={() => deleteTodo(todo.id)} className="text-danger float-end fs-3 me-2" id="wd-delete-todo" />
              <FaPencilAlt onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" id="wd-edit-todo" />

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
