import { RootState } from "../store";

export const selectorFeed = (state: RootState) => {
  return state.feed.orders;
};

export const selectorFeedTotal = (state: RootState) => {
  return state.feed.total;
};

export const selectorFeedTotalToday = (state: RootState) => {
  return state.feed.totalToday;
};

export const selectorFeedError = (state: RootState) => {
  return state.feed.error;
};

export const selectorFeedStatus = (state: RootState) => {
  return state.feed.isConnected;
};
