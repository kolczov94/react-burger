import { TOrderWsItem } from "../../types/order";
import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_SUCCESS,
  FEED_GET_MESSAGE,
  FEED_SINGLE_ORDER,
} from "../constants/feed";
import { TFeedActions } from "../types/feed";

type TFeedState = {
  isConnected: boolean;
  orders: Array<TOrderWsItem>;
  total: number;
  totalToday: number;
  error?: Event;
};

const initialState: TFeedState = {
  isConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const feedReducer = (
  state = initialState,
  action: TFeedActions
): TFeedState => {
  switch (action.type) {
    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        isConnected: true,
      };
    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        isConnected: false,
      };
    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        isConnected: false,
        orders: [],
      };
    case FEED_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case FEED_SINGLE_ORDER:
      return {
        ...state,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
};
