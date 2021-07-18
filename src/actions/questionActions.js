/* eslint-disable no-alert, no-console, no-unused-vars*/

import * as types from "../constants/action-types";
import * as API from "../utils/api";

export const createPollQuestion = (option1, option2) => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.CREATE_QUESTION_STARTED,
    });

    try {
      const session = getState().session;

      const response = await API.createQuestion(
        session.user.id,
        option1,
        option2
      );

      dispatch({
        type: types.CREATE_QUESTION_SUCCESS,
        payload: response,
      });
    } catch (e) {
      console.error("create question action error", e);
      alert("Login Error: Fail to create question");
      dispatch({
        type: types.CREATE_QUESTION_FAIL,
      });
    }
  };
};
