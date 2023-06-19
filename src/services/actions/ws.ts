import { WS_CONNECT, WS_DISCONNECT } from "../constants/ws";
import { TWsConnect, TWsDisconnect } from "../types/ws";

export const wsConnectAction = (url: string): TWsConnect => ({
  type: WS_CONNECT,
  payload: url,
});

export const wsDisconnectAction = (): TWsDisconnect => ({
  type: WS_DISCONNECT,
});
