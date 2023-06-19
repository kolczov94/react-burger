import { WS_CONNECT, WS_DISCONNECT } from "../constants/ws";

export type TWsConnect = {
  readonly type: typeof WS_CONNECT;
  readonly payload: string;
};

export type TWsDisconnect = {
  readonly type: typeof WS_DISCONNECT;
};

export type TWsActions = TWsConnect | TWsDisconnect;
