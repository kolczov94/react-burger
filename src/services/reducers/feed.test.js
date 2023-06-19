import * as types from "../constants/feed";
import { feedReducer } from "./feed";

describe("Burger constructor reducer", () => {
  it("should return the initial state", () => {
    expect(feedReducer(undefined, {})).toEqual({
      isConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });

  it("should handle FEED_CONNECTION_SUCCESS", () => {
    expect(
      feedReducer(undefined, {
        type: types.FEED_CONNECTION_SUCCESS,
      })
    ).toEqual({
      isConnected: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: undefined,
    });
  });

  it("should handle FEED_CONNECTION_ERROR", () => {
    expect(
      feedReducer(undefined, {
        type: types.FEED_CONNECTION_ERROR,
        payload: "Error",
      })
    ).toEqual({
      isConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: "Error",
    });
  });

  it("should handle FEED_CONNECTION_CLOSED", () => {
    expect(
      feedReducer(undefined, {
        type: types.FEED_CONNECTION_CLOSED,
      })
    ).toEqual({
      isConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: undefined,
    });
  });

  it("should handle FEED_GET_MESSAGE", () => {
    expect(
      feedReducer(undefined, {
        type: types.FEED_GET_MESSAGE,
        payload: { orders: [{ id: 1, name: "Test" }], total: 1, totalToday: 2 },
      })
    ).toEqual({
      isConnected: false,
      orders: [{ id: 1, name: "Test" }],
      total: 1,
      totalToday: 2,
      error: undefined,
    });
  });

  it("should handle FEED_SINGLE_ORDER", () => {
    expect(
      feedReducer(undefined, {
        type: types.FEED_SINGLE_ORDER,
        payload: { orders: [{ id: 1, name: "Test" }] },
      })
    ).toEqual({
      isConnected: false,
      orders: [{ id: 1, name: "Test" }],
      total: 0,
      totalToday: 0,
      error: undefined,
    });
  });
});
