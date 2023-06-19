import { TOrderWsResponse } from "../../types/order";
import {
  FEED_USER_CONNECTION_CLOSED,
  FEED_USER_CONNECTION_ERROR,
  FEED_USER_CONNECTION_SUCCESS,
  FEED_USER_GET_MESSAGE,
  FEED_USER_SEND_MESSAGE,
} from "../constants/feed-user";

export type TFeedUserSuccess = {
  readonly type: typeof FEED_USER_CONNECTION_SUCCESS;
  readonly payload: Event;
};

export type TFeedUserError = {
  readonly type: typeof FEED_USER_CONNECTION_ERROR;
  readonly payload: Event;
};

export type TFeedUserClosed = {
  readonly type: typeof FEED_USER_CONNECTION_CLOSED;
  readonly payload?: CloseEvent;
};

export type TFeedUserGetMessage = {
  readonly type: typeof FEED_USER_GET_MESSAGE;
  readonly payload: TOrderWsResponse;
};

export type TFeedUserSendMessage = {
  readonly type: typeof FEED_USER_SEND_MESSAGE;
  readonly payload: string;
};

export type TFeedUserActions =
  | TFeedUserSuccess
  | TFeedUserError
  | TFeedUserClosed
  | TFeedUserGetMessage
  | TFeedUserSendMessage;
