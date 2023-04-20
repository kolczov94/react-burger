import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  UPDATE_CURRENT_TAB,
  UPDATE_CONSTRUCTOR_BUN,
  ADD_CONSTRUCTOR_LIST,
  REMOVE_CONSTRUCTOR_LIST,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  constructorBun: null,
  constructorList: [],

  currentTab: "bun",
  ingredientDetail: {},
  isShowIngredientDetail: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsRequest: true, ingredientsFailed: false };
    }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        ingredientsRequest: false,
      };
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }
    case UPDATE_CURRENT_TAB: {
      return { ...state, currentTab: action.payload };
    }
    case UPDATE_CONSTRUCTOR_BUN: {
      const ingredient = [...state.ingredients].find(
        (item) => item._id === action.payload
      );
      return { ...state, constructorBun: ingredient };
    }
    case ADD_CONSTRUCTOR_LIST: {
      const ingredient = [...state.ingredients].find(
        (item) => item._id === action.payload
      );
      return {
        ...state,
        constructorList: [...state.constructorList, ingredient],
      };
    }
    case REMOVE_CONSTRUCTOR_LIST: {
      return {
        ...state,
        constructorList: state.constructorList.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
