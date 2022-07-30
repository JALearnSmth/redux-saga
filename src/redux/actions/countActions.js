import ActionTypes from "../actionTypes";

const increaseCount = (value) => {
  return { type: ActionTypes.count.Increase, payload: value };
};
const decreaseCount = (value) => {
  return { type: ActionTypes.count.Decrease, payload: value };
};

const counterActions = {
  increaseCount,
  decreaseCount,
};

export default counterActions;
