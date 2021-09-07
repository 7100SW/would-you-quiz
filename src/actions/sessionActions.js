import * as types from "../constants/action-types";
import * as API from "../utils/api";

export const login = (id, pwd) => {
  return async (dispatch) => {
    dispatch({
      type: types.LOGIN_STARTED,
    });

    try {
      const response = await API.loginUser(id, pwd);
      localStorage.setItem("currentUser", JSON.stringify(response));

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });
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
  return async (dispatch) => {
    dispatch({
      type: types.LOGOUT_STARTED,
    });

    try {
      localStorage.clear();
      dispatch({
        type: types.LOGOUT_SUCCESS
      });
    } catch (e) {
      console.error("logout action error", e);
      alert("Logout Error");
      dispatch({
        type: types.LOGOUT_FAIL,
      });
    }
  };
};
