import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
          Delete
        </button>
        <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
          Edit
        </button>
        <span>{todo.title}</span>
      </div>
    </li>
  );
}
