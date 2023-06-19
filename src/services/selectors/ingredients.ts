import { RootState } from "../store";

export const selectorIngredients = (state: RootState) => {
  return state.ingredients.items;
};

export const selectorCurrentTab = (state: RootState) => {
  return state.ingredients.currentTab;
};
