import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";
const Counter = () => {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  console.log("Counter Rendered");

  return (
    <div>
      <button onClick={() => dispatch(Actions.counterActions.increaseCount(1))}>
        Increase
      </button>
      <button onClick={() => dispatch(Actions.counterActions.decreaseCount(1))}>
        Decraese
      </button>
      {count}
    </div>
  );
};

export default Counter;
