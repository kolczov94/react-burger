import { EIngredientTabs, TIngredient } from "../../types/ingredient";
import { getIngredientsRequest } from "../../utils/api";
import { AppThunk } from "../store";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const ICREMENT_INGREDIENT_COUNT: "ICREMENT_INGREDIENT_COUNT" =
  "ICREMENT_INGREDIENT_COUNT";
export const DECREMENT_INGREDIENT_COUNT: "DECREMENT_INGREDIENT_COUNT" =
  "DECREMENT_INGREDIENT_COUNT";
export const UPDATE_INGREDIENT_COUNT_BUN: "UPDATE_INGREDIENT_COUNT_BUN" =
  "UPDATE_INGREDIENT_COUNT_BUN";
export const RESET_INGREDIENTS_COUNT: "RESET_INGREDIENTS_COUNT" =
  "RESET_INGREDIENTS_COUNT";

export const UPDATE_CURRENT_TAB: "UPDATE_CURRENT_TAB" = "UPDATE_CURRENT_TAB";

export type TUpdateCurrentTab = {
  readonly type: typeof UPDATE_CURRENT_TAB;
  readonly sectionId: EIngredientTabs;
};

export type TIncrementIngredientCount = {
  readonly type: typeof ICREMENT_INGREDIENT_COUNT;
  readonly ingredientId: string;
};

export type TDecrementIngredientCount = {
  readonly type: typeof DECREMENT_INGREDIENT_COUNT;
  readonly ingredientId: string;
};

export type TUpdateIngredientCountBun = {
  readonly type: typeof UPDATE_INGREDIENT_COUNT_BUN;
  readonly ingredientId: string;
};

export type TResetIngredientCount = {
  readonly type: typeof RESET_INGREDIENTS_COUNT;
};

export type TGetIngredientsRequest = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export type TGetIngredientsSuccess = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: ReadonlyArray<TIngredient>;
};

export type TGetIngredientsFailed = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export type TIngredientsActions =
  | TUpdateCurrentTab
  | TIncrementIngredientCount
  | TDecrementIngredientCount
  | TUpdateIngredientCountBun
  | TResetIngredientCount
  | TGetIngredientsRequest
  | TGetIngredientsSuccess
  | TGetIngredientsFailed;

export const updateCurrentTab = (
  sectionId: EIngredientTabs
): TUpdateCurrentTab => {
  return {
    type: UPDATE_CURRENT_TAB,
    sectionId,
  };
};

export const incrementIngredientCount = (
  ingredientId: string
): TIncrementIngredientCount => {
  return {
    type: ICREMENT_INGREDIENT_COUNT,
    ingredientId,
  };
};

export const decrementIngredientCount = (
  ingredientId: string
): TDecrementIngredientCount => {
  return {
    type: DECREMENT_INGREDIENT_COUNT,
    ingredientId,
  };
};

export const updateIngredientCountBun = (
  ingredientId: string
): TUpdateIngredientCountBun => {
  return {
    type: UPDATE_INGREDIENT_COUNT_BUN,
    ingredientId,
  };
};

export const resetIngredientCount = (): TResetIngredientCount => {
  return {
    type: RESET_INGREDIENTS_COUNT,
  };
};

export const getIngredients = (): AppThunk => {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredientsRequest()
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      });
  };
};
