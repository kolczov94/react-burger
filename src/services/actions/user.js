import {
  getLoginRequest,
  getRegistrationRequest,
  getLogoutRequest,
  getUserRequest,
  getForgotPasswordRequest,
  getResetPasswordRequest,
  getUserUpdateRequest,
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

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_UPDATE = "USER_UPDATE";
export const USER_FORGOT_PASSWORD = "USER_FORGOT_PASSWORD";
export const USER_FORGOT_PASSWORD_RESET = "USER_FORGOT_PASSWORD_RESET";
export const USER_PASSWORD_RESET = "USER_FORGOT_RESET";

export const USER_DISABLE_REDDIRECT_RESET_PASSWORD =
  "USER_DISABLE_REDDIRECT_RESET_PASSWORD";

export function getUser() {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    getUserRequest()
      .then((data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data.user,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_FAILED });
      });
  };
}

export function userUpdate(name, email, password) {
  return async function (dispatch) {
    getUserUpdateRequest({ name, email, password })
      .then((data) => dispatch({ type: USER_UPDATE, payload: data.user }))
      .catch((err) => alert(err.message));
  };
}

export function onLogin(email, password) {
  return function (dispatch) {
    dispatch({ type: GET_LOGIN_REQUEST });
    getLoginRequest({ email, password })
      .then((data) => {
        if (data && data.success) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            payload: data.user,
          });
        } else {
          dispatch({ type: GET_LOGIN_FAILED });
        }
      })
      .catch((err) => dispatch({ type: GET_LOGIN_FAILED }));
  };
}

export function onLogout() {
  return function (dispatch) {
    getLogoutRequest().then((data) => dispatch({ type: USER_LOGOUT }));
  };
}

export function onRegistration(name, email, password) {
  return function (dispatch) {
    dispatch({ type: GET_REGISTER_REQUEST });
    getRegistrationRequest({ name, email, password })
      .then((data) => {
        if (data && data.success) {
          dispatch({
            type: GET_REGISTER_SUCCESS,
            payload: data.user,
          });
        } else {
          dispatch({ type: GET_REGISTER_FAILED });
        }
      })
      .catch((err) => dispatch({ type: GET_REGISTER_FAILED }));
  };
}

export function userPasswordForgot(email) {
  return function (dispatch) {
    getForgotPasswordRequest(email).then((data) => {
      if (data && data.success) {
        dispatch({
          type: USER_FORGOT_PASSWORD,
          payload: data,
        });
      }
    });
  };
}

export function userPasswordForgotReset() {
  return { type: USER_FORGOT_PASSWORD_RESET };
}

export function userPasswordReset(password, token) {
  return function (dispatch) {
    getResetPasswordRequest({ password, token }).then((data) => {
      if (data && data.success) {
        dispatch({
          type: USER_PASSWORD_RESET,
          payload: data,
        });
      }
    });
  };
}
