import { userReducer } from "./user";
import * as types from "../constants/user";

const defaultState = {
  user: null,
  isResetPassword: false,
  loginRequest: false,
  loginFailed: false,
  registrationRequest: false,
  registrationFailed: false,
  userRequest: false,
  userFailed: false,
};

const userMock = { id: 1, name: "Test" };

describe("User reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(defaultState);
  });

  it("should handle GET_LOGIN_REQUEST", () => {
    expect(
      userReducer(
        { loginRequest: false, loginFailed: false },
        {
          type: types.GET_LOGIN_REQUEST,
        }
      )
    ).toEqual({
      loginRequest: true,
      loginFailed: false,
    });
  });

  it("should handle GET_LOGIN_SUCCESS", () => {
    expect(
      userReducer(
        { user: null, loginRequest: true, loginFailed: false },
        {
          type: types.GET_LOGIN_SUCCESS,
          user: userMock,
        }
      )
    ).toEqual({
      user: userMock,
      loginRequest: false,
      loginFailed: false,
    });
  });

  it("should handle GET_LOGIN_FAILED", () => {
    expect(
      userReducer(
        { loginFailed: false, loginRequest: true, user: userMock },
        {
          type: types.GET_LOGIN_FAILED,
        }
      )
    ).toEqual({
      user: null,
      loginRequest: false,
      loginFailed: true,
    });
  });

  it("should handle GET_REGISTER_REQUEST", () => {
    expect(
      userReducer(
        { registrationRequest: false, registrationFailed: false },
        {
          type: types.GET_REGISTER_REQUEST,
        }
      )
    ).toEqual({
      registrationRequest: true,
      registrationFailed: false,
    });
  });

  it("should handle GET_REGISTER_SUCCESS", () => {
    expect(
      userReducer(
        { user: null, registrationRequest: true, registrationFailed: false },
        {
          type: types.GET_REGISTER_SUCCESS,
          user: userMock,
        }
      )
    ).toEqual({
      user: userMock,
      registrationRequest: false,
      registrationFailed: false,
    });
  });

  it("should handle GET_REGISTER_FAILED", () => {
    expect(
      userReducer(
        { registrationFailed: false, registrationRequest: true },
        {
          type: types.GET_REGISTER_FAILED,
        }
      )
    ).toEqual({
      registrationFailed: true,
      registrationRequest: false,
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      userReducer(
        { userRequest: false, userFailed: false },
        {
          type: types.GET_USER_REQUEST,
        }
      )
    ).toEqual({
      userRequest: true,
      userFailed: false,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      userReducer(
        { userRequest: true, userFailed: false, user: null },
        {
          type: types.GET_USER_SUCCESS,
          user: userMock,
        }
      )
    ).toEqual({
      user: userMock,
      userRequest: false,
      userFailed: false,
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      userReducer(
        { userFailed: false, userRequest: true, user: userMock },
        {
          type: types.GET_USER_FAILED,
        }
      )
    ).toEqual({
      user: null,
      userRequest: false,
      userFailed: true,
    });
  });

  it("should handle USER_FORGOT_PASSWORD", () => {
    expect(
      userReducer(
        { isResetPassword: false },
        {
          type: types.USER_FORGOT_PASSWORD,
        }
      )
    ).toEqual({ isResetPassword: true });
  });

  it("should handle USER_FORGOT_PASSWORD_RESET", () => {
    expect(
      userReducer(
        { isResetPassword: true },
        {
          type: types.USER_FORGOT_PASSWORD_RESET,
        }
      )
    ).toEqual({ isResetPassword: false });
  });

  it("should handle USER_PASSWORD_RESET", () => {
    expect(
      userReducer(
        { isResetPassword: true },
        {
          type: types.USER_PASSWORD_RESET,
        }
      )
    ).toEqual({ isResetPassword: false });
  });

  it("should handle USER_LOGOUT", () => {
    expect(
      userReducer(
        { user: userMock },
        {
          type: types.USER_LOGOUT,
        }
      )
    ).toEqual({ user: null });
  });

  it("should handle USER_UPDATE", () => {
    expect(
      userReducer(
        { user: userMock },
        {
          type: types.USER_UPDATE,
          user: { id: 1, name: "Test2" },
        }
      )
    ).toEqual({
      user: { id: 1, name: "Test2" },
    });
  });
});
