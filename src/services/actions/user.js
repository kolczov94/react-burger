import {
  getLoginRequest,
  getRegistrationRequest,
  getLogoutRequest,
  getRefreshTokenRequest,
  getUserRequest,
} from "../../utils/api";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";

export const GET_REGISTER_REQUEST = "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED = "GET_REGISTER_FAILED";

export const GET_LOGOUT_REQUEST = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED = "GET_LOGOUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUser() {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    getUserRequest()
      .then((data) => {
        console.log("USERDATA", data);
        if (data && data.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({ type: GET_USER_FAILED });
        }
      })
      .catch((err) => dispatch({ type: GET_USER_FAILED }));
  };
}

export function onLogin(email, password) {
  return function (dispatch) {
    dispatch({ type: GET_LOGIN_REQUEST });
    getLoginRequest(email, password).then((data) => {
      console.log("LOGINDATA", data);
      if (data && data.success) {
        dispatch({
          type: GET_LOGIN_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({ type: GET_LOGIN_FAILED });
      }
    });
  };
}

export function onRegistration(name, email, password) {
  return function (dispatch) {
    dispatch({ type: GET_REGISTER_REQUEST });
    getRegistrationRequest(name, email, password).then((data) => {
      console.log("REGISTERDATA", data);
      if (data && data.success) {
        dispatch({
          type: GET_REGISTER_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({ type: GET_REGISTER_FAILED });
      }
    });
  };
}
