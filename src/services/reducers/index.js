import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
});
