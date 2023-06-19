import { TOrderSingleWsResponse, TOrderWsResponse } from "../../types/order";
import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_SUCCESS,
  FEED_GET_MESSAGE,
  FEED_SEND_MESSAGE,
  FEED_SINGLE_ORDER,
} from "../constants/feed";

export type TFeedSuccess = {
  readonly type: typeof FEED_CONNECTION_SUCCESS;
  readonly payload: Event;
};

export type TFeedError = {
  readonly type: typeof FEED_CONNECTION_ERROR;
  readonly payload: Event;
};

export type TFeedClosed = {
  readonly type: typeof FEED_CONNECTION_CLOSED;
  readonly payload?: CloseEvent;
};

export type TFeedGetMessage = {
  readonly type: typeof FEED_GET_MESSAGE;
  readonly payload: TOrderWsResponse;
};

export type TFeedSendMessage = {
  readonly type: typeof FEED_SEND_MESSAGE;
  readonly payload: string;
};

export type TFeedSingleOrder = {
  readonly type: typeof FEED_SINGLE_ORDER;
  readonly payload: TOrderSingleWsResponse;
};

export type TFeedActions =
  | TFeedSuccess
  | TFeedError
  | TFeedClosed
  | TFeedGetMessage
  | TFeedSendMessage
  | TFeedSingleOrder;
