import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [];

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
  console.log("STATE\n", state);
});

export default store;
