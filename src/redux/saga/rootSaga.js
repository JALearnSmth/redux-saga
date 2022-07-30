import { takeLatest } from "redux-saga/effects";
import ActionTypes from "../actionTypes";
export function* rootSaga() {
  yield takeLatest(ActionTypes.user.GET_USER, handleGetUsers);
}
const handleGetUsers = () => {};
