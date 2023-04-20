import { getIngredientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const UPDATE_CURRENT_TAB = "UPDATE_CURRENT_TAB";
export const UPDATE_INGREDIENTS_DETAIL = "UPDATE_INGREDIENTS_DETAIL";
export const UPDATE_CONSTRUCTOR_BUN = "UPDATE_INGREDIENTS_DETAIL";
export const ADD_CONSTRUCTOR_LIST = "ADD_CONSTRUCTOR_LIST";
export const REMOVE_CONSTRUCTOR_LIST = "REMOVE_CONSTRUCTOR_LIST";

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

export function updateCurrentTab(name) {
  return {
    type: UPDATE_CURRENT_TAB,
    payload: name,
  };
}

export function updateIngredientsDetail(id) {
  return {
    type: UPDATE_INGREDIENTS_DETAIL,
    payload: id,
  };
}

export function updateConstructorBun(id) {
  return {
    type: UPDATE_CONSTRUCTOR_BUN,
    payload: id,
  };
}

export function addConstructorList(id) {
  return {
    type: ADD_CONSTRUCTOR_LIST,
    payload: id,
  };
}

export function removeConstructorList(id) {
  return {
    type: REMOVE_CONSTRUCTOR_LIST,
    payload: id,
  };
}
