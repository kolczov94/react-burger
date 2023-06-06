export type TIngredient = {
  _id: string;
  constructor_id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  count: number;
  __v: number;
};

export type TIngredientResponse = {
  success: boolean;
  data: Array<TIngredient>;
};

export enum EIngredientTabs {
  bun = "bun",
  sauce = "sauce",
  main = "main",
}
