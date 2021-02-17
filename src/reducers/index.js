import {combineReducers} from "redux";
import sessionReducer from "./sessionReducer";
import questionReducer from "./questionReducer";
import answerReducer from "./answerReducer";

const reducer = combineReducers({
    session: sessionReducer,
    questions: questionReducer,
    answers: answerReducer
});

export default reducer;