/* eslint-disable */

import * as types from "../constants/action-types";
import * as API from "../utils/api";

export const addUserAnswer = (questionId, answer) => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.ADD_ANSWER_STARTED,
    });

    try {
      const session = getState().session;

      const response = await API.addUserAnswer(
        questionId,
        session.user.id,
        answer
      );

      dispatch({
        type: types.ADD_ANSWER_SUCCESS,
        payload: {
          qId: questionId,
          uId: session.user.id,
          answer: answer,
        },
      });

      // history.push("/");
    } catch (e) {
      console.error("create user answer error", e);
      alert("Login Error: Fail to create answer to question");
      dispatch({
        type: types.ADD_ANSWER_FAIL,
      });
    }
  };
};
