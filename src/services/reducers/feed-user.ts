import { TOrderWsItem } from "../../types/order";
import {
  FEED_USER_CONNECTION_CLOSED,
  FEED_USER_CONNECTION_ERROR,
  FEED_USER_CONNECTION_SUCCESS,
  FEED_USER_GET_MESSAGE,
} from "../constants/feed-user";
import { TFeedUserActions } from "../types/feed-user";

type TFeedUserState = {
  isConnected: boolean;
  orders: Array<TOrderWsItem>;
  error?: Event;
};

const initialState: TFeedUserState = {
  isConnected: false,
  orders: [],
};

export const feedUserReducer = (
  state = initialState,
  action: TFeedUserActions
): TFeedUserState => {
  switch (action.type) {
    case FEED_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        isConnected: true,
      };
    case FEED_USER_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        isConnected: false,
      };
    case FEED_USER_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        isConnected: false,
        orders: [],
      };
    case FEED_USER_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
};
