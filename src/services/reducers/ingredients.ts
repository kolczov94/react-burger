import { EIngredientTabs, TIngredient } from "../../types/ingredient";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ICREMENT_INGREDIENT_COUNT,
  DECREMENT_INGREDIENT_COUNT,
  UPDATE_INGREDIENT_COUNT_BUN,
  RESET_INGREDIENTS_COUNT,
  UPDATE_CURRENT_TAB,
  TIngredientsActions,
} from "../actions/ingredients";

type TIngredientsState = {
  items: ReadonlyArray<TIngredient>;
  isRequest: boolean;
  isFailed: boolean;
  ingredientDetail: TIngredient | null;
  isShowIngredientDetail: boolean;
  currentTab: EIngredientTabs;
};

const initialState: TIngredientsState = {
  items: [],
  isRequest: false,
  isFailed: false,
  ingredientDetail: null,
  isShowIngredientDetail: false,
  currentTab: EIngredientTabs.bun,
};

export const ingredientsReducer = (
  state = initialState,
  action: TIngredientsActions
): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, isRequest: true, isFailed: false };
    }
    case GET_INGREDIENTS_SUCCESS:
      const ingredients = action.ingredients.map((item) => ({
        ...item,
        count: 0,
      }));
      return {
        ...state,
        items: ingredients,
        isRequest: false,
      };
    case GET_INGREDIENTS_FAILED: {
      return { ...state, isFailed: true, isRequest: false };
    }
    case ICREMENT_INGREDIENT_COUNT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.ingredientId) {
            return { ...item, count: ++item.count };
          }
          return item;
        }),
      };
    }
    case DECREMENT_INGREDIENT_COUNT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.ingredientId) {
            return { ...item, count: --item.count };
          }
          return item;
        }),
      };
    }
    case UPDATE_INGREDIENT_COUNT_BUN: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.type === "bun") {
            return item._id === action.ingredientId
              ? { ...item, count: 2 }
              : { ...item, count: 0 };
          }
          return item;
        }),
      };
    }
    case RESET_INGREDIENTS_COUNT: {
      return {
        ...state,
        items: state.items.map((item) => ({ ...item, count: 0 })),
      };
    }
    case UPDATE_CURRENT_TAB: {
      return { ...state, currentTab: action.sectionId };
    }
    default:
      return state;
  }
};
