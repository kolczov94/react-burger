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
import { TUserActions } from "../types/user";

type TUserState = {
  user: TUser | null;
  isResetPassword: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  registrationRequest: boolean;
  registrationFailed: boolean;
  userRequest: boolean;
  userFailed: boolean;
};

const initialState: TUserState = {
  user: null,
  isResetPassword: false,
  loginRequest: false,
  loginFailed: false,
  registrationRequest: false,
  registrationFailed: false,
  userRequest: false,
  userFailed: false,
};

export const userReducer = (
  state = initialState,
  action: TUserActions
): TUserState => {
  switch (action.type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, loginRequest: true, loginFailed: false };
    }
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loginRequest: false,
        loginFailed: false,
      };
    case GET_LOGIN_FAILED: {
      return { ...state, loginFailed: true, loginRequest: false, user: null };
    }

    case GET_REGISTER_REQUEST: {
      return { ...state, registrationRequest: true, registrationFailed: false };
    }
    case GET_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        registrationRequest: false,
        registrationFailed: false,
      };
    case GET_REGISTER_FAILED: {
      return { ...state, registrationFailed: true, registrationRequest: false };
    }

    case GET_USER_REQUEST: {
      return { ...state, userRequest: true, userFailed: false };
    }
    case GET_USER_SUCCESS:
      return {
        ...state,
        userRequest: false,
        userFailed: false,
        user: action.user,
      };
    case GET_USER_FAILED: {
      return { ...state, userFailed: true, userRequest: false, user: null };
    }

    case USER_FORGOT_PASSWORD: {
      return {
        ...state,
        isResetPassword: true,
      };
    }
    case USER_FORGOT_PASSWORD_RESET: {
      return { ...state, isResetPassword: false };
    }
    case USER_PASSWORD_RESET: {
      return { ...state, isResetPassword: false };
    }

    case USER_LOGOUT: {
      return { ...state, user: null };
    }
    case USER_UPDATE: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
