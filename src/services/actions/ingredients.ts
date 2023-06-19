import { EIngredientTabs, TIngredient } from "../../types/ingredient";
import { getIngredientsRequest } from "../../utils/api";
import {
  DECREMENT_INGREDIENT_COUNT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ICREMENT_INGREDIENT_COUNT,
  RESET_INGREDIENTS_COUNT,
  UPDATE_CURRENT_TAB,
  UPDATE_INGREDIENT_COUNT_BUN,
} from "../constants/ingredients";
import { AppThunk } from "../store";
import {
  TDecrementIngredientCount,
  TGetIngredientsFailed,
  TGetIngredientsRequest,
  TGetIngredientsSuccess,
  TIncrementIngredientCount,
  TResetIngredientCount,
  TUpdateCurrentTab,
  TUpdateIngredientCountBun,
} from "../types/ingredients";

export const updateCurrentTabAction = (
  sectionId: EIngredientTabs
): TUpdateCurrentTab => {
  return {
    type: UPDATE_CURRENT_TAB,
    sectionId,
  };
};

export const incrementIngredientCountAction = (
  ingredientId: string
): TIncrementIngredientCount => {
  return {
    type: ICREMENT_INGREDIENT_COUNT,
    ingredientId,
  };
};

export const decrementIngredientCountAction = (
  ingredientId: string
): TDecrementIngredientCount => {
  return {
    type: DECREMENT_INGREDIENT_COUNT,
    ingredientId,
  };
};

export const updateIngredientCountBunAction = (
  ingredientId: string
): TUpdateIngredientCountBun => {
  return {
    type: UPDATE_INGREDIENT_COUNT_BUN,
    ingredientId,
  };
};

export const resetIngredientCountAction = (): TResetIngredientCount => {
  return {
    type: RESET_INGREDIENTS_COUNT,
  };
};

export const ingredientsRequestAction = (): TGetIngredientsRequest => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

export const ingredientsSuccessAction = (
  ingredients: Array<TIngredient>
): TGetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients,
  };
};

export const ingredientsFailedAction = (): TGetIngredientsFailed => {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
};

export const getIngredientsThunk = (): AppThunk => {
  return (dispatch) => {
    dispatch(ingredientsRequestAction());
    getIngredientsRequest()
      .then((data) => {
        dispatch(ingredientsSuccessAction(data.data));
      })
      .catch((err) => {
        dispatch(ingredientsFailedAction());
      });
  };
};
