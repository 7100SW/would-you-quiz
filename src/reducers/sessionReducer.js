import * as types from "../constants/action-types";

const defaultState = {
  authenticated: false,
  user: null
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };

    case types.LOGOUT_SUCCESS:
      return {
        authenticated: false,
        user: null,
      };

    case types.ADD_ANSWER_SUCCESS: {
      const { qId, answer } = action.payload;

      const {user} = state;
      user.answers = {
        ...user.answers,
        [qId]: answer,
      };

      return {
        ...state,
        user: {
          ...user,
        },
      };
    }

    default:
      return state;
  }
};

export default sessionReducer;
