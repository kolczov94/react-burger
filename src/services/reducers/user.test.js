import { userReducer } from "./user";
import * as types from "../constants/user";

describe("User reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_LOGIN_REQUEST", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_LOGIN_REQUEST,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: true,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_LOGIN_SUCCESS", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_LOGIN_SUCCESS,
        user: { id: 1, name: "Test" },
      })
    ).toEqual({
      user: { id: 1, name: "Test" },
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_LOGIN_FAILED", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_LOGIN_FAILED,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: true,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_REGISTER_REQUEST", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_REGISTER_REQUEST,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: true,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_REGISTER_SUCCESS", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_REGISTER_SUCCESS,
        user: { id: 1, name: "Test" },
      })
    ).toEqual({
      user: { id: 1, name: "Test" },
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_REGISTER_FAILED", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_REGISTER_FAILED,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: true,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_USER_REQUEST,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: true,
      userFailed: false,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_USER_SUCCESS,
        user: { id: 1, name: "Test" },
      })
    ).toEqual({
      user: { id: 1, name: "Test" },
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      userReducer(undefined, {
        type: types.GET_USER_FAILED,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: true,
    });
  });

  it("should handle USER_FORGOT_PASSWORD", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_FORGOT_PASSWORD,
      })
    ).toEqual({
      user: null,
      isResetPassword: true,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle USER_FORGOT_PASSWORD_RESET", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_FORGOT_PASSWORD_RESET,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle USER_PASSWORD_RESET", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_PASSWORD_RESET,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle USER_LOGOUT", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_LOGOUT,
      })
    ).toEqual({
      user: null,
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle USER_UPDATE", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_UPDATE,
        user: { id: 1, name: "Test2" },
      })
    ).toEqual({
      user: { id: 1, name: "Test2" },
      isResetPassword: false,
      loginRequest: false,
      loginFailed: false,
      registrationRequest: false,
      registrationFailed: false,
      userRequest: false,
      userFailed: false,
    });
  });
});
