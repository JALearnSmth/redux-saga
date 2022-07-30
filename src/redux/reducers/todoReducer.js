import ActionTypes from "../actionTypes";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.todo.addTodo:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default todoReducer;
