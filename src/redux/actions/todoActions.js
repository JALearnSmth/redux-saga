import ActionTypes from "../actionTypes";

const addTodo = (todo) => {
  return { type: ActionTypes.todo.addTodo, payload: todo };
};
const todoActions = {
  addTodo,
};

export default todoActions;
