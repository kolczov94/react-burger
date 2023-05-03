import { setCookie } from "../../utils/cookie";
import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../actions/user";

const initialState = {
  user: null,
  loginRequest: false,
  loginFailed: false,
  registrationRequest: false,
  registrationFailed: false,
  userRequest: false,
  userFailed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, loginRequest: true, loginFailed: false };
    }
    case GET_LOGIN_SUCCESS:
      setCookie("refreshToken", action.payload.refreshToken);
      return { ...state, user: action.payload.user };
    case GET_LOGIN_FAILED: {
      return { ...state, loginFailed: true, loginRequest: false };
    }
    case GET_REGISTER_REQUEST: {
      return { ...state, registrationRequest: true, registrationFailed: false };
    }
    case GET_REGISTER_SUCCESS:
      setCookie("refreshToken", action.payload.refreshToken);
      return { ...state, user: action.payload.user };
    case GET_REGISTER_FAILED: {
      return { ...state, registrationFailed: true, registrationRequest: false };
    }
    case GET_USER_REQUEST: {
      return { ...state, userRequest: true, userFailed: false };
    }
    case GET_USER_SUCCESS:
      console.log(action.payload);
      return { ...state, userRequest: true, userFailed: false };
    case GET_USER_FAILED: {
      return { ...state, userFailed: true, userRequest: false };
    }
    default:
      return state;
  }
};
