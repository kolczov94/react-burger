import { RootState } from "../store";

export const selectorBurgerConstructorIngredients = (state: RootState) => {
  return state.burgerConstructor.ingredients;
};

export const selectorBurgerConstructorBun = (state: RootState) => {
  return state.burgerConstructor.bun;
};
