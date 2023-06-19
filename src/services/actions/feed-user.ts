import { TOrderWsResponse } from "../../types/order";
import {
  FEED_USER_CONNECTION_CLOSED,
  FEED_USER_CONNECTION_ERROR,
  FEED_USER_CONNECTION_SUCCESS,
  FEED_USER_GET_MESSAGE,
  FEED_USER_SEND_MESSAGE,
} from "../constants/feed-user";
import { WS_CONNECT, WS_DISCONNECT } from "../constants/ws";

import {
  TFeedUserClosed,
  TFeedUserError,
  TFeedUserGetMessage,
  TFeedUserSendMessage,
  TFeedUserSuccess,
} from "../types/feed-user";

export const wsSuccessAction = (payload: Event): TFeedUserSuccess => ({
  type: FEED_USER_CONNECTION_SUCCESS,
  payload,
});

export const wsErrorAction = (payload: Event): TFeedUserError => ({
  type: FEED_USER_CONNECTION_ERROR,
  payload,
});

export const wsClosedAction = (payload?: CloseEvent): TFeedUserClosed => ({
  type: FEED_USER_CONNECTION_CLOSED,
  payload,
});

export const wsGetMessageAction = (
  payload: TOrderWsResponse
): TFeedUserGetMessage => ({
  type: FEED_USER_GET_MESSAGE,
  payload,
});

export const wsSendMessageAction = (payload: string): TFeedUserSendMessage => ({
  type: FEED_USER_SEND_MESSAGE,
  payload,
});

export type TFeedUserWsActions = {
  wsInit: typeof WS_CONNECT;
  wsDisconnect: typeof WS_DISCONNECT;
  onOpen: typeof FEED_USER_CONNECTION_SUCCESS;
  onClose: typeof FEED_USER_CONNECTION_CLOSED;
  onError: typeof FEED_USER_CONNECTION_ERROR;
  onMessage: typeof FEED_USER_GET_MESSAGE;
  sendMessage: typeof FEED_USER_SEND_MESSAGE;
};

export const feedUserWsActions = {
  wsInit: WS_CONNECT,
  wsDisconnect: WS_DISCONNECT,
  onOpen: FEED_USER_CONNECTION_SUCCESS,
  onClose: FEED_USER_CONNECTION_CLOSED,
  onError: FEED_USER_CONNECTION_ERROR,
  onMessage: FEED_USER_GET_MESSAGE,
  sendMessage: FEED_USER_SEND_MESSAGE,
};
