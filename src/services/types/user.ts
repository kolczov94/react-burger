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

export type TUserPasswordForgotReset = {
  readonly type: typeof USER_FORGOT_PASSWORD_RESET;
};

export type TGetUserRequest = {
  readonly type: typeof GET_USER_REQUEST;
};

export type TGetUserSuccess = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
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
  readonly message: string;
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

export type TUserPasswordForgot = {
  readonly type: typeof USER_FORGOT_PASSWORD;
  readonly message: string;
};

export type TUserPasswordReset = {
  readonly type: typeof USER_PASSWORD_RESET;
  readonly message: string;
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
  | TUserPasswordForgot
  | TUserPasswordReset;
