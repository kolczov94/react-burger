import { getOrderRequest } from "../../utils/api";
import { AppThunk } from "../store";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const CLOSE_MODAL_ORDER_DETAIL: "CLOSE_MODAL_ORDER_DETAIL" =
  "CLOSE_MODAL_ORDER_DETAIL";

export type TCloseModalOrderDetail = {
  readonly type: typeof CLOSE_MODAL_ORDER_DETAIL;
};

export type TGetOrderRequest = {
  readonly type: typeof GET_ORDER_REQUEST;
};

export type TGetOrderSuccess = {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: {
    name: string;
    number: number;
  };
};

export type TGetOrderFailed = {
  type: typeof GET_ORDER_FAILED;
};

export type TOrderActions =
  | TCloseModalOrderDetail
  | TGetOrderRequest
  | TGetOrderSuccess
  | TGetOrderFailed;

export const closeModalOrderDetail = (): TCloseModalOrderDetail => ({
  type: CLOSE_MODAL_ORDER_DETAIL,
});

export const getOrder = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch({ type: GET_ORDER_REQUEST });
    const {
      burgerConstructor: { ingredients, bun },
    } = getState();

    let ingreidentsIds = ingredients.map((item) => item._id);
    if (bun && bun._id) {
      ingreidentsIds = [bun._id, ...ingreidentsIds, bun._id];
    }

    getOrderRequest(ingreidentsIds)
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: { name: data.name, number: data.order.number },
        });
      })
      .catch((err) => dispatch({ type: GET_ORDER_FAILED }));
  };
};
