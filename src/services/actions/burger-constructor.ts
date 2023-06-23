import { TIngredient } from "../../types/ingredient";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  REMOVE_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR,
  UPDATE_CONSTRUCTOR_BUN,
} from "../constants/burger-constructor";
import { AppThunk } from "../store";
import {
  TAddConstructorItem,
  TMoveConstructorItem,
  TRemoveConstructorItem,
  TResetBurgerConstructor,
  TUpdateConstructorBun,
} from "../types/burger-constructor";

export const removeConstructorItemAction = (
  id: string
): TRemoveConstructorItem => {
  return {
    type: REMOVE_CONSTRUCTOR_ITEM,
    id,
  };
};

export const moveConstructorItemAction = (payload: {
  id: string;
  atIndex: number;
}): TMoveConstructorItem => {
  return {
    type: MOVE_CONSTRUCTOR_ITEM,
    payload,
  };
};

export const resetBurgerConstructorAction = (): TResetBurgerConstructor => ({
  type: RESET_CONSTRUCTOR,
});

export const updateConstructorBunAction = (
  ingredient: TIngredient
): TUpdateConstructorBun => ({
  type: UPDATE_CONSTRUCTOR_BUN,
  ingredient,
});

export const addConstructorItemAction = (
  ingredient: TIngredient
): TAddConstructorItem => ({
  type: ADD_CONSTRUCTOR_ITEM,
  ingredient,
});

export const updateConstructorBunThunk = (id: string): AppThunk => {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredientBun = [...ingredients.items].find(
      (item) => item._id === id
    );
    if (ingredientBun) {
      dispatch(updateConstructorBunAction(ingredientBun));
    }
  };
};

export const addConstructorItemThunk = (id: string): AppThunk => {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredient = [...ingredients.items].find((item) => item._id === id);
    if (ingredient) {
      dispatch(
        addConstructorItemAction({
          ...ingredient,
          second_id: uuidv4(),
        })
      );
    }
  };
};
