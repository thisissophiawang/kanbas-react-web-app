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

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const removeTodo = async (todo: Todo) => {
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
      console.error("Error posting new todo", error);
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      console.log("Attempting to delete todo", todoId);
      await client.deleteTodo(todoId);
      const newTodos = todos.filter((t) => t.id !== todoId);
      setTodos(newTodos);
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      console.log("Attempting to update todo", todo);
      await client.updateTodo(todo);
      const updatedTodos = todos.map(t => t.id === todo.id ? todo : t);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo", error);
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
