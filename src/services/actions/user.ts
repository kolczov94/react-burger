import { TUser } from "../../types/user";
import {
  getLoginRequest,
  getRegistrationRequest,
  getLogoutRequest,
  getUserRequest,
  getForgotPasswordRequest,
  getResetPasswordRequest,
  getUserUpdateRequest,
} from "../../utils/api";
import { AppThunk } from "../store";

export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS" = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED: "GET_LOGIN_FAILED" = "GET_LOGIN_FAILED";

export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" =
  "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" =
  "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";

export const GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST" = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS: "GET_LOGOUT_SUCCESS" = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED: "GET_LOGOUT_FAILED" = "GET_LOGOUT_FAILED";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const USER_LOGOUT: "USER_LOGOUT" = "USER_LOGOUT";
export const USER_UPDATE: "USER_UPDATE" = "USER_UPDATE";
export const USER_FORGOT_PASSWORD: "USER_FORGOT_PASSWORD" =
  "USER_FORGOT_PASSWORD";
export const USER_FORGOT_PASSWORD_RESET: "USER_FORGOT_PASSWORD_RESET" =
  "USER_FORGOT_PASSWORD_RESET";
export const USER_PASSWORD_RESET: "USER_FORGOT_RESET" = "USER_FORGOT_RESET";
export const USER_DISABLE_REDDIRECT_RESET_PASSWORD =
  "USER_DISABLE_REDDIRECT_RESET_PASSWORD";

export type TUserPasswordForgotReset = {
  readonly type: typeof USER_FORGOT_PASSWORD_RESET;
};

export type TGetUserRequest = {
  readonly type: typeof GET_USER_REQUEST;
};

export type TGetUserSuccess = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: any;
};

export type TGetUserFailed = {
  readonly type: typeof GET_USER_FAILED;
};

export type TUserUpdate = {
  readonly type: typeof USER_UPDATE;
  readonly user: TUser;
};

export type TGetLoginRequest = {
  readonly type: typeof GET_LOGIN_REQUEST;
};

export type TGetLoginSuccess = {
  readonly type: typeof GET_LOGIN_SUCCESS;
  readonly user: TUser;
};

export type TGetLoginFailed = {
  readonly type: typeof GET_LOGIN_FAILED;
};

export type TUserLogout = {
  readonly type: typeof USER_LOGOUT;
};

export type TGetRegisterRequest = {
  readonly type: typeof GET_REGISTER_REQUEST;
};

export type TGetRegisterSuccess = {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly user: TUser;
};

export type TGetRegisterFailed = {
  readonly type: typeof GET_REGISTER_FAILED;
};

export type TUserForgotPassword = {
  readonly type: typeof USER_FORGOT_PASSWORD;
};

export type TUserPasswordReset = {
  readonly type: typeof USER_PASSWORD_RESET;
};

export type TUserActions =
  | TUserPasswordForgotReset
  | TGetUserRequest
  | TGetUserSuccess
  | TGetUserFailed
  | TUserUpdate
  | TGetLoginRequest
  | TGetLoginSuccess
  | TGetLoginFailed
  | TUserLogout
  | TGetRegisterRequest
  | TGetRegisterSuccess
  | TGetRegisterFailed
  | TUserForgotPassword
  | TUserPasswordReset;

export const userPasswordForgotReset = (): TUserPasswordForgotReset => ({
  type: USER_FORGOT_PASSWORD_RESET,
});

export const getUser = (): AppThunk => {
  return (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    getUserRequest()
      .then((data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_FAILED });
      });
  };
};

export const userUpdate = (userData: {
  name: string;
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    getUserUpdateRequest(userData)
      .then((data) => dispatch({ type: USER_UPDATE, user: data.user }))
      .catch((err) => alert(err.message));
  };
};

export const onLogin = (userData: {
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    dispatch({ type: GET_LOGIN_REQUEST });
    getLoginRequest(userData)
      .then((data) => {
        dispatch({
          type: GET_LOGIN_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => dispatch({ type: GET_LOGIN_FAILED }));
  };
};

export const onLogout = (): AppThunk => {
  return function (dispatch) {
    getLogoutRequest().then((data) => dispatch({ type: USER_LOGOUT }));
  };
};

export const onRegistration = (userData: {
  name: string;
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    dispatch({ type: GET_REGISTER_REQUEST });
    getRegistrationRequest(userData)
      .then((data) => {
        dispatch({
          type: GET_REGISTER_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => dispatch({ type: GET_REGISTER_FAILED }));
  };
};

export const userPasswordForgot = (email: string): AppThunk => {
  return (dispatch) => {
    getForgotPasswordRequest(email).then((data) => {
      dispatch({
        type: USER_FORGOT_PASSWORD,
        payload: data.message,
      });
    });
  };
};

export const userPasswordReset = (userData: {
  password: string;
  token: string;
}): AppThunk => {
  return (dispatch) => {
    getResetPasswordRequest(userData).then((data) => {
      dispatch({
        type: USER_PASSWORD_RESET,
        payload: data.message,
      });
    });
  };
};
