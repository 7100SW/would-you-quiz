/* eslint-disable no-alert, no-console, no-unused-vars*/

import * as types from "../constants/action-types";
import * as API from "../utils/api";

export const login = (id, pwd) => {
  return async (dispatch, getState) => {
    console.log("login action starts");

    dispatch({
      type: types.LOGIN_STARTED,
    });

    try {
      const response = await API.loginUser(id, pwd);
      console.log("login result", response);
      localStorage.setItem("currentUser", JSON.stringify(response));

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });

      console.log("login action ends");
    } catch (e) {
      console.error("login action error", e);
      alert("Login Error: Unknown User/Password");
      dispatch({
        type: types.LOGIN_FAIL,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    console.log("logout action starts");

    dispatch({
      type: types.LOGOUT_STARTED,
    });

    try {
      dispatch({
        type: types.LOGOUT_FAIL,
      });

      console.log("logout action ends");
    } catch (e) {
      console.error("logout action error", e);
      alert("Logout Error");
      dispatch({
        type: types.LOGOUT_FAIL,
      });
    }
  };
};
