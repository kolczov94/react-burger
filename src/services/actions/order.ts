import { getOrderRequest } from "../../utils/api";
import {
  CLOSE_MODAL_ORDER_DETAIL,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/order";
import { AppThunk } from "../store";
import {
  TCloseModalOrderDetail,
  TGetOrderFailed,
  TGetOrderRequest,
  TGetOrderSuccess,
} from "../types/order";

export const closeOrderDetailAction = (): TCloseModalOrderDetail => ({
  type: CLOSE_MODAL_ORDER_DETAIL,
});

export const orderRequestAction = (): TGetOrderRequest => ({
  type: GET_ORDER_REQUEST,
});

export const orderSuccessAction = (payload: {
  name: string;
  number: number;
}): TGetOrderSuccess => ({
  type: GET_ORDER_SUCCESS,
  payload,
});

export const orderFailedAction = (): TGetOrderFailed => ({
  type: GET_ORDER_FAILED,
});

export const getOrderThunk = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(orderRequestAction());
    const {
      burgerConstructor: { ingredients, bun },
    } = getState();

    let ingreidentsIds = ingredients.map((item) => item._id);
    if (bun && bun._id) {
      ingreidentsIds = [bun._id, ...ingreidentsIds, bun._id];
    }

    getOrderRequest(ingreidentsIds)
      .then((data) => {
        dispatch(
          orderSuccessAction({ name: data.name, number: data.order.number })
        );
      })
      .catch((err) => dispatch(orderFailedAction()));
  };
};
