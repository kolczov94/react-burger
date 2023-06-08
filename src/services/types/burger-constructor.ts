import { TIngredient } from "../../types/ingredient";
import {
  ADD_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  REMOVE_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR,
  UPDATE_CONSTRUCTOR_BUN,
} from "../constants/burger-constructor";

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
