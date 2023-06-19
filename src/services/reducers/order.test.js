import * as types from "../constants/order";
import { orderReducer } from "./order";

describe("Ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual({
      number: 0,
      name: "",
      orderRequest: false,
      orderFailed: false,
      isShow: false,
    });
  });

  it("should handle GET_ORDER_REQUEST", () => {
    expect(
      orderReducer(
        { orderRequest: false, orderFailed: false, isShow: false },
        {
          type: types.GET_ORDER_REQUEST,
        }
      )
    ).toEqual({ orderRequest: true, orderFailed: false, isShow: true });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(
      orderReducer(
        {
          number: 0,
          name: "",
          orderRequest: true,
        },
        {
          type: types.GET_ORDER_SUCCESS,
          payload: { name: "Test", number: 1 },
        }
      )
    ).toEqual({
      number: 1,
      name: "Test",
      orderRequest: false,
    });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(
      orderReducer(
        { orderFailed: false, orderRequest: true },
        {
          type: types.GET_ORDER_FAILED,
        }
      )
    ).toEqual({ orderFailed: true, orderRequest: false });
  });

  it("should handle CLOSE_MODAL_ORDER_DETAIL", () => {
    expect(
      orderReducer(
        { isShow: true },
        {
          type: types.CLOSE_MODAL_ORDER_DETAIL,
        }
      )
    ).toEqual({ isShow: false });
  });
});
