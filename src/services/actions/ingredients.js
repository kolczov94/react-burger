import { getIngredientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const UPDATE_CURRENT_TAB = "UPDATE_CURRENT_TAB";
export const UPDATE_INGREDIENTS_DETAIL = "UPDATE_INGREDIENTS_DETAIL";

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
