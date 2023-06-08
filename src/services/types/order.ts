import {
  CLOSE_MODAL_ORDER_DETAIL,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/order";

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
