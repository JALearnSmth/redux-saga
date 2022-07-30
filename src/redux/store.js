import { createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run();
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
