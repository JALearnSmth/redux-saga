import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";
const Todos = () => {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const todo = "JAJ";
  console.log("Todo Rendered");
  return (
    <div>
      <button onClick={() => dispatch(Actions.todoActions.addTodo(todo))}>
        Add todo
      </button>
      <ul>
        {todos && todos.map((todo) => <li key={Math.random()}>{todo}</li>)}
      </ul>
    </div>
  );
};

export default Todos;
