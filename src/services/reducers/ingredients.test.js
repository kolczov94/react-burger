import * as types from "../constants/ingredients";
import { EIngredientTabs } from "../../types/ingredient";
import { ingredientsReducer } from "./ingredients";

const defaultState = {
  items: [],
  isRequest: false,
  isFailed: false,
  ingredientDetail: null,
  isShowIngredientDetail: false,
  currentTab: EIngredientTabs.bun,
};

describe("Ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(defaultState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(
        { isRequest: false, isFailed: false },
        {
          type: types.GET_INGREDIENTS_REQUEST,
        }
      )
    ).toEqual({ isRequest: true, isFailed: false });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      ingredientsReducer(
        { items: [], isRequest: true },
        {
          type: types.GET_INGREDIENTS_SUCCESS,
          ingredients: [{ id: 1 }],
        }
      )
    ).toEqual({
      items: [{ id: 1, count: 0 }],
      isRequest: false,
    });
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(
        { isFailed: false, isRequest: true },
        {
          type: types.GET_INGREDIENTS_FAILED,
        }
      )
    ).toEqual({
      isFailed: true,
      isRequest: false,
    });
  });

  it("should handle ICREMENT_INGREDIENT_COUNT", () => {
    expect(
      ingredientsReducer(
        { items: [{ id: 1, count: 0 }] },
        {
          type: types.ICREMENT_INGREDIENT_COUNT,
        }
      )
    ).toEqual({
      items: [{ id: 1, count: 1 }],
    });
  });

  it("should handle DECREMENT_INGREDIENT_COUNT", () => {
    expect(
      ingredientsReducer(
        { items: [{ id: 1, count: 1 }] },
        {
          type: types.DECREMENT_INGREDIENT_COUNT,
        }
      )
    ).toEqual({
      items: [{ id: 1, count: 0 }],
    });
  });

  it("should handle UPDATE_INGREDIENT_COUNT_BUN", () => {
    expect(
      ingredientsReducer(
        { items: [{ _id: 1, count: 0, type: "bun" }] },
        {
          type: types.UPDATE_INGREDIENT_COUNT_BUN,
          ingredientId: 1,
        }
      )
    ).toEqual({
      items: [{ _id: 1, count: 2, type: "bun" }],
    });
  });

  it("should handle RESET_INGREDIENTS_COUNT", () => {
    expect(
      ingredientsReducer(
        { items: [{ id: 1, count: 5 }] },
        {
          type: types.RESET_INGREDIENTS_COUNT,
        }
      )
    ).toEqual({
      items: [{ id: 1, count: 0 }],
    });
  });

  it("should handle UPDATE_CURRENT_TAB", () => {
    expect(
      ingredientsReducer(
        { currentTab: "bun" },
        {
          type: types.UPDATE_CURRENT_TAB,
          sectionId: "souce",
        }
      )
    ).toEqual({ currentTab: "souce" });
  });
});
