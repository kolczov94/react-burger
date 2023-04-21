import { getIngredientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const UPDATE_CURRENT_TAB = "UPDATE_CURRENT_TAB";
export const UPDATE_INGREDIENTS_DETAIL = "UPDATE_INGREDIENTS_DETAIL";
export const UPDATE_CONSTRUCTOR_BUN = "UPDATE_INGREDIENTS_DETAIL";
export const ADD_CONSTRUCTOR_LIST = "ADD_CONSTRUCTOR_LIST";
export const REMOVE_CONSTRUCTOR_LIST = "REMOVE_CONSTRUCTOR_LIST";
export const MOVE_CONSTRUCTOR_ITEM = "MOVE_CONSTRUCTOR_ITEM";

export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredientsRequest().then((data) => {
      if (data && data.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      }
    });
  };
}

export function updateCurrentTab(payload) {
  return {
    type: UPDATE_CURRENT_TAB,
    payload,
  };
}

export function updateIngredientsDetail(payload) {
  return {
    type: UPDATE_INGREDIENTS_DETAIL,
    payload,
  };
}

export function updateConstructorBun(payload) {
  return {
    type: UPDATE_CONSTRUCTOR_BUN,
    payload,
  };
}

export function addConstructorList(payload) {
  return {
    type: ADD_CONSTRUCTOR_LIST,
    payload,
  };
}

export function removeConstructorList(payload) {
  return {
    type: REMOVE_CONSTRUCTOR_LIST,
    payload,
  };
}

export function moveConstructorItem(payload) {
  return {
    type: MOVE_CONSTRUCTOR_ITEM,
    payload,
  };
}
