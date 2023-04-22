import {
  ADD_CONSTRUCTOR_ITEM,
  REMOVE_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  UPDATE_CONSTRUCTOR_BUN,
  RESET_CONSTRUCTOR,
} from "../actions/burger-constructor";

const initialState = {
  ingredients: [],
  bun: {},
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case REMOVE_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.constructor_id !== action.payload
        ),
      };
    }
    case UPDATE_CONSTRUCTOR_BUN: {
      return { ...state, bun: action.payload };
    }
    case MOVE_CONSTRUCTOR_ITEM: {
      const { id, atIndex } = action.payload;
      const card = [...state.ingredients].find(
        (item) => item.constructor_id === id
      );
      const index = state.ingredients.indexOf(card);

      const newIngredients = [...state.ingredients];
      newIngredients.splice(index, 1);
      newIngredients.splice(atIndex, 0, card);
      return {
        ...state,
        ingredients: newIngredients,
      };
    }
    case RESET_CONSTRUCTOR: {
      return { ...state, bun: {}, ingredients: [] };
    }
    default:
      return state;
  }
};
