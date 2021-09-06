import * as types from "../constants/action-types";
import * as API from "../utils/api";

export const addUserAnswer =
  (questionId, answer) => async (dispatch, getState) => {
    dispatch({
      type: types.ADD_ANSWER_STARTED,
    });

    try {
      const { session } = getState();
      await API.addUserAnswer(questionId, session.user.id, answer);
      dispatch({
        type: types.ADD_ANSWER_SUCCESS,
        payload: {
          qId: questionId,
          uId: session.user.id,
          answer,
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
