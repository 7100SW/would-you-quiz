import * as types from "../constants/action-types";

const defaultState = {};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
