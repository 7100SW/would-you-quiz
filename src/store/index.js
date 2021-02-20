import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  console.log("STATE\n", store.getState());
});

export default store;
