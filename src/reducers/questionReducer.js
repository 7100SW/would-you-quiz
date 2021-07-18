import * as types from "../constants/action-types";

const defaultState = {};

const questionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...action.payload,
      };

    case types.CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
