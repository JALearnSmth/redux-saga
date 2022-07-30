import ActionTypes from "../actionTypes";

const initialState = [];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.user.SET_USER:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default userReducer;
