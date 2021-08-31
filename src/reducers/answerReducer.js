import * as types from "../constants/action-types";

const defaultState = {};

const answerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ANSWERS_SUCCESS:
      return {
        ...action.payload,
      };

    case types.ADD_ANSWER_SUCCESS: {
      const { qId, uId, answer } = action.payload;

      let target = state[qId];
      if (!target) {
        target = {
          optionOne: [],
          optionTwo: [],
          totalCount: 0,
        };
      }

      if (answer === "OptionOne") {
        target.optionOne.push(uId);
      } else {
        target.optionTwo.push(uId);
      }

      target.count = target.optionOne.length + target.optionTwo.length;
      return {
        ...state,
        [qId]: target,
      };
    }

    default:
      return state;
  }
};

export default answerReducer;
