import { TOrderWsItem } from "../../types/order";
import {
  GET_SINGLE_ORDER,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants/ws";
import { TWsActions } from "../types/ws";

type TWsState = {
  wsConnected: boolean;
  orders: Array<TOrderWsItem>;
  total: number;
  totalToday: number;
  error?: Event;
};

const initialState: TWsState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducer = (
  state = initialState,
  action: TWsActions
): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        orders: [],
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case GET_SINGLE_ORDER:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
};
