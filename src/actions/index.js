import { hideLoading, showLoading } from "react-redux-loading";
import * as types from "../constants/action-types";
import * as API from "../utils/api";

export * from "./sessionActions";
export * from "./questionActions";
export * from "./answerAction";

export function runDataInit() {
  return async (dispatch) => {
    dispatch(showLoading());

    const response = await API.getInitialData();
    console.log("GetInitialData Returns", response);
    const { questions, answers, users } = response;

    if (users) {
      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: users,
      });
    }

    if (questions) {
      dispatch({
        type: types.GET_QUESTIONS_SUCCESS,
        payload: questions,
      });
    }

    if (answers) {
      dispatch({
        type: types.GET_ANSWERS_SUCCESS,
        payload: answers,
      });
    }

    dispatch(hideLoading());
  };
}
