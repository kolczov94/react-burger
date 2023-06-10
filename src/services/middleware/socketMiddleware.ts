import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TApplicationActions } from "../store";
import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_PROTECTED_CONNECT,
  WS_SEND_MESSAGE,
} from "../constants/ws";
import {
  wsClosedAction,
  wsErrorAction,
  wsGetMessageAction,
  wsSuccessAction,
} from "../actions/ws";

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === WS_CONNECT) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/orders/all`);
      }
      if (type === WS_PROTECTED_CONNECT) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/orders?token=${action.accessToken}`);
      }
      if (socket && type === WS_DISCONNECT) {
        socket.close(1000);
        socket = null;
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch(wsSuccessAction(event));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch(wsGetMessageAction(JSON.parse(data)));
        };

        socket.onerror = (event) => {
          dispatch(wsErrorAction(event));
        };

        socket.onclose = (event) => {
          dispatch(wsClosedAction(event));
        };

        if (type === WS_SEND_MESSAGE) {
          const message = action.payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
