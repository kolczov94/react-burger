import { getIngredientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const ICREMENT_INGREDIENT_COUNT = "ICREMENT_INGREDIENT_COUNT";
export const DECREMENT_INGREDIENT_COUNT = "DECREMENT_INGREDIENT_COUNT";
export const UPDATE_INGREDIENT_COUNT_BUN = "UPDATE_INGREDIENT_COUNT_BUN";
export const RESET_INGREDIENTS_COUNT = "RESET_INGREDIENTS_COUNT";

export const UPDATE_CURRENT_TAB = "UPDATE_CURRENT_TAB";

export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredientsRequest()
      .then((data) => {
        if (data && data.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: data.data,
          });
        } else {
          dispatch({ type: GET_INGREDIENTS_FAILED });
        }
      })
      .catch((err) => console.log(err));
  };
}

export function updateCurrentTab(payload) {
  return {
    type: UPDATE_CURRENT_TAB,
    payload,
  };
}

export function incrementIngredientCount(payload) {
  return {
    type: ICREMENT_INGREDIENT_COUNT,
    payload,
  };
}

export function decrementIngredientCount(payload) {
  return {
    type: DECREMENT_INGREDIENT_COUNT,
    payload,
  };
}

export function updateIngredientCountBun(payload) {
  return {
    type: UPDATE_INGREDIENT_COUNT_BUN,
    payload,
  };
}

export function resetIngredientCount() {
  return {
    type: RESET_INGREDIENTS_COUNT,
  };
}
