import {
  getLoginRequest,
  getRegistrationRequest,
  getLogoutRequest,
  getUserRequest,
  getForgotPasswordRequest,
  getResetPasswordRequest,
  getUserUpdateRequest,
} from "../../utils/api";
import { TUser } from "../../types/user";
import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_REGISTER_FAILED,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_FORGOT_PASSWORD,
  USER_FORGOT_PASSWORD_RESET,
  USER_LOGOUT,
  USER_PASSWORD_RESET,
  USER_UPDATE,
} from "../constants/user";
import { AppThunk } from "../store";
import {
  TGetLoginFailed,
  TGetLoginRequest,
  TGetLoginSuccess,
  TGetRegisterFailed,
  TGetRegisterRequest,
  TGetRegisterSuccess,
  TGetUserFailed,
  TGetUserRequest,
  TGetUserSuccess,
  TUserLogout,
  TUserPasswordForgot,
  TUserPasswordForgotReset,
  TUserPasswordReset,
  TUserUpdate,
} from "../types/user";

export const userRequestAction = (): TGetUserRequest => ({
  type: GET_USER_REQUEST,
});

export const userSuccessAction = (user: TUser): TGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  user,
});

export const userFailedAction = (): TGetUserFailed => ({
  type: GET_USER_FAILED,
});

export const userUpdateSuccessAction = (user: TUser): TUserUpdate => ({
  type: USER_UPDATE,
  user,
});

export const loginRequestAction = (): TGetLoginRequest => ({
  type: GET_LOGIN_REQUEST,
});

export const loginSuccessAction = (user: TUser): TGetLoginSuccess => ({
  type: GET_LOGIN_SUCCESS,
  user,
});

export const loginFailedAction = (): TGetLoginFailed => ({
  type: GET_LOGIN_FAILED,
});

export const logoutSuccessAction = (message: string): TUserLogout => ({
  type: USER_LOGOUT,
  message,
});

export const registerRequestAction = (): TGetRegisterRequest => ({
  type: GET_REGISTER_REQUEST,
});

export const registerSuccessAction = (user: TUser): TGetRegisterSuccess => ({
  type: GET_REGISTER_SUCCESS,
  user,
});

export const registerFailedAction = (): TGetRegisterFailed => ({
  type: GET_REGISTER_FAILED,
});

export const passwordResetAction = (message: string): TUserPasswordReset => ({
  type: USER_PASSWORD_RESET,
  message,
});

export const passwordForgotAction = (message: string): TUserPasswordForgot => ({
  type: USER_FORGOT_PASSWORD,
  message,
});

export const passwordForgotResetAction = (): TUserPasswordForgotReset => ({
  type: USER_FORGOT_PASSWORD_RESET,
});

export const getUserThunk = (): AppThunk => {
  return (dispatch) => {
    dispatch(userRequestAction());
    getUserRequest()
      .then((data) => {
        dispatch(userSuccessAction(data.user));
      })
      .catch((err) => {
        dispatch(userFailedAction());
      });
  };
};

export const userUpdateThunk = (userData: {
  name: string;
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    getUserUpdateRequest(userData)
      .then((data) => dispatch(userUpdateSuccessAction(data.user)))
      .catch((err) => alert(err.message));
  };
};

export const onLoginThunk = (userData: {
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    dispatch(loginRequestAction());
    getLoginRequest(userData)
      .then((data) => {
        dispatch(loginSuccessAction(data.user));
      })
      .catch((err) => dispatch(loginFailedAction()));
  };
};

export const onLogoutThunk = (): AppThunk => {
  return function (dispatch) {
    getLogoutRequest().then((data) =>
      dispatch(logoutSuccessAction(data.message))
    );
  };
};

export const onRegistrationThunk = (userData: {
  name: string;
  email: string;
  password: string;
}): AppThunk => {
  return (dispatch) => {
    dispatch(registerRequestAction());
    getRegistrationRequest(userData)
      .then((data) => {
        dispatch(registerSuccessAction(data.user));
      })
      .catch((err) => dispatch(registerFailedAction()));
  };
};

export const onPasswordForgotThunk = (email: string): AppThunk => {
  return (dispatch) => {
    getForgotPasswordRequest(email).then((data) => {
      dispatch(passwordForgotAction(data.message));
    });
  };
};

export const onPasswordResetThunk = (userData: {
  password: string;
  token: string;
}): AppThunk => {
  return (dispatch) => {
    getResetPasswordRequest(userData).then((data) => {
      dispatch(passwordResetAction(data.message));
    });
  };
};
