import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import sessionReducer from "./sessionReducer";
import questionReducer from "./questionReducer";
import answerReducer from "./answerReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  loadingBar: loadingBarReducer,
  session: sessionReducer,
  questions: questionReducer,
  answers: answerReducer,
  users: userReducer,
});

export default reducer;
