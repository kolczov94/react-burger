import { RootState } from "../store";

export const selectorWsOrders = (state: RootState) => {
  return state.ws.orders;
};

export const selectorWsTotal = (state: RootState) => {
  return state.ws.total;
};

export const selectorWsTotalToday = (state: RootState) => {
  return state.ws.totalToday;
};

export const selectorWsError = (state: RootState) => {
  return state.ws.error;
};

export const selectorWsStatus = (state: RootState) => {
  return state.ws.wsConnected;
};
