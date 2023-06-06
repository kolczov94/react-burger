import { RootState } from "../store";

export const selectorOrderNumber = (state: RootState) => {
  return state.order.number;
};

export const selectorOrderRequest = (state: RootState) => {
  return state.order.orderRequest;
};

export const selectorIsShowOrder = (state: RootState) => {
  return state.order.isShow;
};
