import ActionTypes from "../actionTypes";

const setUsers = (users) => ({
  type: ActionTypes.user.SET_USER,
  payload: users,
});
const getUsers = (users) => ({ type: ActionTypes.user.GET_USER });
const userActions = {
  setUsers,
  getUsers,
};
export default userActions;
