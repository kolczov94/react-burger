import { TIngredient } from "../../types/ingredient";
import { AppDispatch, AppThunk } from "../store";

export const ADD_CONSTRUCTOR_ITEM: "ADD_CONSTRUCTOR_ITEM" =
  "ADD_CONSTRUCTOR_ITEM";
export const REMOVE_CONSTRUCTOR_ITEM: "REMOVE_CONSTRUCTOR_ITEM" =
  "REMOVE_CONSTRUCTOR_ITEM";
export const MOVE_CONSTRUCTOR_ITEM: "MOVE_CONSTRUCTOR_ITEM" =
  "MOVE_CONSTRUCTOR_ITEM";
export const UPDATE_CONSTRUCTOR_BUN: "UPDATE_INGREDIENTS_DETAIL" =
  "UPDATE_INGREDIENTS_DETAIL";
export const RESET_CONSTRUCTOR: "RESET_CONSTRUCTOR" = "RESET_CONSTRUCTOR";

export type TRemoveConstructorItem = {
  readonly type: typeof REMOVE_CONSTRUCTOR_ITEM;
  readonly id: string;
};

export type TMoveConstructorItem = {
  readonly type: typeof MOVE_CONSTRUCTOR_ITEM;
  readonly payload: { id: string; atIndex: number };
};

export type TResetBurgerConstructor = {
  readonly type: typeof RESET_CONSTRUCTOR;
};

export type TUpdateConstructorBun = {
  readonly type: typeof UPDATE_CONSTRUCTOR_BUN;
  readonly ingredient: TIngredient;
};

export type TAddConstructorItem = {
  readonly type: typeof ADD_CONSTRUCTOR_ITEM;
  readonly ingredient: TIngredient;
};

export type TBurgerConstructorActions =
  | TRemoveConstructorItem
  | TMoveConstructorItem
  | TResetBurgerConstructor
  | TUpdateConstructorBun
  | TAddConstructorItem;

export const removeConstructorItem = (id: string): TRemoveConstructorItem => {
  return {
    type: REMOVE_CONSTRUCTOR_ITEM,
    id,
  };
};

export const moveConstructorItem = (payload: {
  id: string;
  atIndex: number;
}): TMoveConstructorItem => {
  return {
    type: MOVE_CONSTRUCTOR_ITEM,
    payload,
  };
};

export const resetBurgerConstructor = (): TResetBurgerConstructor => ({
  type: RESET_CONSTRUCTOR,
});

export const updateConstructorBun = (id: string): AppThunk => {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredientBun = [...ingredients.items].find(
      (item) => item._id === id
    );
    if (ingredientBun) {
      dispatch({
        type: UPDATE_CONSTRUCTOR_BUN,
        ingredient: ingredientBun,
      });
    }
  };
};

export const addConstructorItem = (id: string): AppThunk => {
  return (dispatch: AppDispatch, getState) => {
    const { ingredients } = getState();
    const ingredient = [...ingredients.items].find((item) => item._id === id);
    if (ingredient) {
      dispatch({
        type: ADD_CONSTRUCTOR_ITEM,
        ingredient: { ...ingredient, constructor_id: crypto.randomUUID() },
      });
    }
  };
};
