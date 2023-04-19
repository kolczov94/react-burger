import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  UPDATE_CURRENT_TAB,
} from "../actions/ingredients";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  currentTab: "bun",
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, itemsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS:
      console.log("INGRREDUCER", action.payload);
      return { ...state, items: action.payload };
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case UPDATE_CURRENT_TAB: {
      return { ...state, currentTab: action.payload };
    }
    default:
      return state;
  }
};
