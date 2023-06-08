import { EIngredientTabs, TIngredient } from "../../types/ingredient";
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
