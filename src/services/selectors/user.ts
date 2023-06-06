import { RootState } from "../store";

export const selectorUser = (state: RootState) => {
  return state.user.user;
};

export const selectorUserRequest = (state: RootState) => {
  return state.user.userRequest;
};

export const selectorUserIsResetPassword = (state: RootState) => {
  return state.user.isResetPassword;
};
