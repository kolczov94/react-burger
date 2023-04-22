import {
  CLOSE_INGREDIENT_DETAIL,
  OPEN_INGREDIENT_DETAIL,
} from "../actions/ingredient-detail";

const initialState = {
  ingredient: {},
  isShow: false,
};

export const ingredientDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAIL: {
      return {
        ...state,
        isShow: true,
        ingredient: action.payload,
      };
    }
    case CLOSE_INGREDIENT_DETAIL: {
      return {
        ...state,
        isShow: false,
        ingredient: {},
      };
    }
    default:
      return state;
  }
};
