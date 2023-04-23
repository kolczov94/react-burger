import { getOrderRequest } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const CLOSE_MODAL_ORDER_DETAIL = "CLOSE_MODAL_ORDER_DETAIL";

export function getOrder() {
  return function (dispatch, getState) {
    dispatch({ type: GET_ORDER_REQUEST });
    const {
      burgerConstructor: { ingredients, bun },
    } = getState();

    const ingreidentsIds = ingredients.map((item) => item._id);
    if (bun._id) {
      ingreidentsIds.push(bun._id, bun._id);
    }

    getOrderRequest(ingreidentsIds).then((data) => {
      if (data && data.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: { name: data.name, number: data.order.number },
        });
      } else {
        dispatch({ type: GET_ORDER_FAILED });
      }
    });
  };
}

export function closeModalOrderDetail() {
  return {
    type: CLOSE_MODAL_ORDER_DETAIL,
  };
}
