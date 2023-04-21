import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  UPDATE_CURRENT_TAB,
  UPDATE_CONSTRUCTOR_BUN,
  ADD_CONSTRUCTOR_LIST,
  REMOVE_CONSTRUCTOR_LIST,
  MOVE_CONSTRUCTOR_ITEM,
  ICREMENT_INGREDIENT_COUNT,
  DECREMENT_INGREDIENT_COUNT,
  UPDATE_INGREDIENT_COUNT_BUN,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLOSE_MODAL_ORDER_DETAIL,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  ingredientDetail: {},

  order: {},
  isShowOrderDetail: false,
  orderRequest: false,
  orderFailed: false,

  constructorBun: {},
  constructorList: [],
  currentTab: "bun",
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
    case GET_ORDER_REQUEST: {
      return { ...state, orderRequest: true, orderFailed: false };
    }
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        isShowOrderDetail: true,
        orderRequest: false,
      };
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
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
        constructorList: [
          ...state.constructorList,
          { ...ingredient, second_id: crypto.randomUUID() },
        ],
      };
    }
    case REMOVE_CONSTRUCTOR_LIST: {
      return {
        ...state,
        constructorList: state.constructorList.filter(
          (item) => item.second_id !== action.payload
        ),
      };
    }
    case MOVE_CONSTRUCTOR_ITEM: {
      const { id, atIndex } = action.payload;
      const card = state.constructorList.filter((item) => item._id === id)[0];
      const index = state.constructorList.indexOf(card);

      const newConstructorList = [...state.constructorList];
      newConstructorList.splice(index, 1);
      newConstructorList.splice(atIndex, 0, card);
      return {
        ...state,
        constructorList: newConstructorList,
      };
    }
    case ICREMENT_INGREDIENT_COUNT: {
      const id = action.payload;
      return {
        ...state,
        ingredients: state.ingredients.map((item) => {
          if (item._id === id) {
            return item.count
              ? { ...item, count: ++item.count }
              : { ...item, count: 1 };
          }
          return item;
        }),
      };
    }
    case DECREMENT_INGREDIENT_COUNT: {
      const id = action.payload;
      return {
        ...state,
        ingredients: state.ingredients.map((item) => {
          if (item._id === id) {
            return { ...item, count: --item.count };
          }
          return item;
        }),
      };
    }
    case UPDATE_INGREDIENT_COUNT_BUN: {
      const id = action.payload;
      return {
        ...state,
        ingredients: state.ingredients.map((item) => {
          if (item.type === "bun") {
            return item._id === id
              ? { ...item, count: 2 }
              : { ...item, count: 0 };
          }
          return item;
        }),
      };
    }
    case CLOSE_MODAL_ORDER_DETAIL: {
      return { ...state, isShowOrderDetail: false };
    }
    default:
      return state;
  }
};
