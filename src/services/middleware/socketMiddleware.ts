import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TApplicationActions } from "../store";
import { getRefreshTokenRequest } from "../../utils/api";
import { TFeedWsActions } from "../actions/feed";
import { TFeedUserWsActions } from "../actions/feed-user";

export const socketMiddleware = (
  wsActions: TFeedWsActions | TFeedUserWsActions
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    const {
      wsInit,
      onOpen,
      onClose,
      onError,
      onMessage,
      sendMessage,
      wsDisconnect,
    } = wsActions;
    let socket: WebSocket;
    let url: string;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === wsInit) {
        url = action.payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          if (parsedData.success) {
            dispatch({ type: onMessage, payload: parsedData });
          }
          if (parsedData.message === "Invalid or missing token") {
            getRefreshTokenRequest().then((data) => {
              dispatch({ type: wsInit, payload: url });
            });
          }
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === sendMessage) {
          const message = action.payload;
          socket.send(JSON.stringify(message));
        }

        if (type === wsDisconnect) {
          socket.close(1000);
        }
      }

      next(action);
    };
  }) as Middleware;
};
