import { RootState } from "../store";

export const selectorFeedUser = (state: RootState) => {
  return state.feedUser.orders;
};

export const selectorFeedUserError = (state: RootState) => {
  return state.feedUser.error;
};

export const selectorFeedUserStatus = (state: RootState) => {
  return state.feedUser.isConnected;
};
