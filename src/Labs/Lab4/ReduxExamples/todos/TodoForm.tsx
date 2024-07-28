import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">
          Add
        </button>
        <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click">
          Update
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
          style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
        />
      </div>
    </li>
  );
}
