import { useParams } from "react-router-dom";
import { useTodoStore } from "../store/TodoStore";

export default function TodoList() {
  const { todoList, todo, getNewTodo, addTodo } = useTodoStore();
  const { month, date } = useParams();

  return (
    <>
      <div>
        {todoList.map((el) => {
          return <p key={`${(month, date, el.id)}`}>{el.payload}</p>;
        })}
      </div>
      <div>
        <input
          className="w-50 h-10 bg-white text-black p-3"
          value={todo}
          onChange={getNewTodo}
        />
        <button
          onClick={() => {
            addTodo(todo);
          }}
        >
          Add new Todo
        </button>
      </div>
    </>
  );
}
