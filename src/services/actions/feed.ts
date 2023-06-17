import { TOrderSingleWsResponse, TOrderWsResponse } from "../../types/order";
import { getSingleOrderRequest } from "../../utils/api";
import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_SUCCESS,
  FEED_GET_MESSAGE,
  FEED_SEND_MESSAGE,
  FEED_SINGLE_ORDER,
} from "../constants/feed";
import { WS_CONNECT, WS_DISCONNECT } from "../constants/ws";

import { AppThunk } from "../store";
import {
  TFeedClosed,
  TFeedError,
  TFeedGetMessage,
  TFeedSendMessage,
  TFeedSingleOrder,
  TFeedSuccess,
} from "../types/feed";

export const wsSuccessAction = (payload: Event): TFeedSuccess => ({
  type: FEED_CONNECTION_SUCCESS,
  payload,
});

export const wsErrorAction = (payload: Event): TFeedError => ({
  type: FEED_CONNECTION_ERROR,
  payload,
});

export const wsClosedAction = (payload?: CloseEvent): TFeedClosed => ({
  type: FEED_CONNECTION_CLOSED,
  payload,
});

export const wsGetMessageAction = (
  payload: TOrderWsResponse
): TFeedGetMessage => ({
  type: FEED_GET_MESSAGE,
  payload,
});

export const wsSendMessageAction = (payload: string): TFeedSendMessage => ({
  type: FEED_SEND_MESSAGE,
  payload,
});

export const getSingleOrderAction = (
  payload: TOrderSingleWsResponse
): TFeedSingleOrder => ({
  type: FEED_SINGLE_ORDER,
  payload,
});

export const getSingleOrderThunk = (number: string): AppThunk => {
  return (dispatch) => {
    getSingleOrderRequest(number).then((data) => {
      dispatch(getSingleOrderAction(data));
    });
  };
};

export type TFeedWsActions = {
  wsInit: typeof WS_CONNECT;
  wsDisconnect: typeof WS_DISCONNECT;
  onOpen: typeof FEED_CONNECTION_SUCCESS;
  onClose: typeof FEED_CONNECTION_CLOSED;
  onError: typeof FEED_CONNECTION_ERROR;
  onMessage: typeof FEED_GET_MESSAGE;
  sendMessage: typeof FEED_SEND_MESSAGE;
};

export const feedWsActions = {
  wsInit: WS_CONNECT,
  wsDisconnect: WS_DISCONNECT,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_MESSAGE,
  sendMessage: FEED_SEND_MESSAGE,
};
