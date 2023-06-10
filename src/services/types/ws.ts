import { TOrderWsResponse } from "../../types/order";
import {
  WS_CONNECT,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_DISCONNECT,
  WS_GET_MESSAGE,
  WS_PROTECTED_CONNECT,
  WS_SEND_MESSAGE,
} from "../constants/ws";

export type TWsConnect = {
  readonly type: typeof WS_CONNECT;
};

export type TWsProtectedConnect = {
  readonly type: typeof WS_PROTECTED_CONNECT;
  readonly accessToken: string;
};

export type TWsDisconnect = {
  readonly type: typeof WS_DISCONNECT;
};

export type TWsSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
};

export type TWsError = {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
};

export type TWsClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload?: CloseEvent;
};

export type TWsGetMessage = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TOrderWsResponse;
};

export type TWsSendMessage = {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: string;
};

export type TWsActions =
  | TWsConnect
  | TWsProtectedConnect
  | TWsDisconnect
  | TWsSuccess
  | TWsError
  | TWsClosed
  | TWsGetMessage
  | TWsSendMessage;
