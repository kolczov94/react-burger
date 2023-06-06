import {
  ADD_CONSTRUCTOR_ITEM,
  REMOVE_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  UPDATE_CONSTRUCTOR_BUN,
  RESET_CONSTRUCTOR,
  TBurgerConstructorActions,
} from "../actions/burger-constructor";
import { TIngredient } from "../../types/ingredient";

type TBurgerConstructorState = {
  ingredients: ReadonlyArray<TIngredient>;
  bun: TIngredient | null;
};

const initialState: TBurgerConstructorState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructorReducer = (
  state = initialState,
  action: TBurgerConstructorActions
): TBurgerConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    }
    case REMOVE_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.constructor_id !== action.id
        ),
      };
    }
    case UPDATE_CONSTRUCTOR_BUN: {
      return { ...state, bun: action.ingredient };
    }
    case MOVE_CONSTRUCTOR_ITEM: {
      const { id, atIndex } = action.payload;
      const card = [...state.ingredients].find(
        (item) => item.constructor_id === id
      );

      if (card) {
        const index = state.ingredients.indexOf(card);
        const newIngredients = [...state.ingredients];
        newIngredients.splice(index, 1);
        newIngredients.splice(atIndex, 0, card);
        return {
          ...state,
          ingredients: newIngredients,
        };
      }
      return state;
    }
    case RESET_CONSTRUCTOR: {
      return { ...state, bun: null, ingredients: [] };
    }
    default:
      return state;
  }
};
