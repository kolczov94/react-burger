import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { ingredientDetailReducer } from "./ingredient-detail";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientDetail: ingredientDetailReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
});
