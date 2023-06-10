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
import {
  TWsClosed,
  TWsConnect,
  TWsDisconnect,
  TWsError,
  TWsGetMessage,
  TWsProtectedConnect,
  TWsSendMessage,
  TWsSuccess,
} from "../types/ws";

export const wsConnectAction = (): TWsConnect => ({
  type: WS_CONNECT,
});

export const wsProtectedStartAction = (
  accessToken: string
): TWsProtectedConnect => ({
  type: WS_PROTECTED_CONNECT,
  accessToken,
});

export const wsSuccessAction = (payload: Event): TWsSuccess => ({
  type: WS_CONNECTION_SUCCESS,
  payload,
});

export const wsErrorAction = (payload: Event): TWsError => ({
  type: WS_CONNECTION_ERROR,
  payload,
});

export const wsDisconnectAction = (): TWsDisconnect => ({
  type: WS_DISCONNECT,
});

export const wsClosedAction = (payload?: CloseEvent): TWsClosed => ({
  type: WS_CONNECTION_CLOSED,
  payload,
});

export const wsGetMessageAction = (
  payload: TOrderWsResponse
): TWsGetMessage => ({
  type: WS_GET_MESSAGE,
  payload,
});

export const wsSendMessageAction = (payload: string): TWsSendMessage => ({
  type: WS_SEND_MESSAGE,
  payload,
});
