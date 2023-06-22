import * as types from "../constants/feed-user";
import { feedUserReducer } from "./feed-user";

const defaultState = {
  isConnected: false,
  orders: [],
  error: undefined,
};

describe("Burger constructor reducer", () => {
  it("should return the initial state", () => {
    expect(feedUserReducer(undefined, {})).toEqual(defaultState);
  });

  it("should handle FEED_USER_CONNECTION_SUCCESS", () => {
    expect(
      feedUserReducer(
        { isConnected: false, error: undefined },
        {
          type: types.FEED_USER_CONNECTION_SUCCESS,
        }
      )
    ).toEqual({
      isConnected: true,
      error: undefined,
    });
  });

  it("should handle FEED_USER_CONNECTION_ERROR", () => {
    expect(
      feedUserReducer(
        { isConnected: true, error: "Error" },
        {
          type: types.FEED_USER_CONNECTION_ERROR,
          payload: "Error",
        }
      )
    ).toEqual({
      isConnected: false,
      error: "Error",
    });
  });

  it("should handle FEED_USER_CONNECTION_CLOSED", () => {
    expect(
      feedUserReducer(undefined, {
        type: types.FEED_USER_CONNECTION_CLOSED,
      })
    ).toEqual(defaultState);
  });

  it("should handle FEED_USER_GET_MESSAGE", () => {
    expect(
      feedUserReducer(undefined, {
        type: types.FEED_USER_GET_MESSAGE,
        payload: { orders: [{ id: 1, name: "Test" }] },
      })
    ).toEqual({
      isConnected: false,
      orders: [{ id: 1, name: "Test" }],
      error: undefined,
    });
  });
});
