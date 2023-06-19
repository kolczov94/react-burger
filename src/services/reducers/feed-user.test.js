import * as types from "../constants/feed-user";
import { feedUserReducer } from "./feed-user";

describe("Burger constructor reducer", () => {
  it("should return the initial state", () => {
    expect(feedUserReducer(undefined, {})).toEqual({
      isConnected: false,
      orders: [],
    });
  });

  it("should handle FEED_USER_CONNECTION_SUCCESS", () => {
    expect(
      feedUserReducer(undefined, {
        type: types.FEED_USER_CONNECTION_SUCCESS,
      })
    ).toEqual({
      isConnected: true,
      orders: [],
      error: undefined,
    });
  });

  it("should handle FEED_USER_CONNECTION_ERROR", () => {
    expect(
      feedUserReducer(undefined, {
        type: types.FEED_USER_CONNECTION_ERROR,
        payload: "Error",
      })
    ).toEqual({
      isConnected: false,
      orders: [],
      error: "Error",
    });
  });

  it("should handle FEED_USER_CONNECTION_CLOSED", () => {
    expect(
      feedUserReducer(undefined, {
        type: types.FEED_USER_CONNECTION_CLOSED,
      })
    ).toEqual({
      isConnected: false,
      orders: [],
      error: undefined,
    });
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
