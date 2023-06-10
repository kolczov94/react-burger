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

import { TUserActions } from "./types/user";
import { TOrderActions } from "./types/order";
import { TIngredientsActions } from "./types/ingredients";
import { TBurgerConstructorActions } from "./types/burger-constructor";
import { TWsActions } from "./types/ws";
import { wsReducer } from "./reducers/ws";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { WS_URL } from "../utils/api";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
  ws: wsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, socketMiddleware(WS_URL)))
);

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions =
  | TUserActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderActions
  | TWsActions;

export type AppThunk<TReturn = void> = ThunkAction<
  TReturn,
  RootState,
  never,
  TApplicationActions
>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();
