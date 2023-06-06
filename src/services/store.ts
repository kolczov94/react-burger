import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { ingredientsReducer } from "./reducers/ingredients";
import { burgerConstructorReducer } from "./reducers/burger-constructor";
import { orderReducer } from "./reducers/order";
import { userReducer } from "./reducers/user";

import { TUserActions } from "./actions/user";
import { TBurgerConstructorActions } from "./actions/burger-constructor";
import { TIngredientsActions } from "./actions/ingredients";
import { TOrderActions } from "./actions/order";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
type TApplicationActions =
  | TUserActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderActions;

export type AppThunk<TReturn = void> = ThunkAction<
  TReturn,
  RootState,
  never,
  TApplicationActions
>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();
