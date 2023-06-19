import * as types from "../constants/burger-constructor";
import { burgerConstructorReducer } from "./burger-constructor";

describe("Burger constructor reducer", () => {
  it("should return the initial state", () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual({
      ingredients: [],
      bun: null,
    });
  });

  it("should handle ADD_CONSTRUCTOR_ITEM", () => {
    expect(
      burgerConstructorReducer(
        { ingredients: [] },
        {
          type: types.ADD_CONSTRUCTOR_ITEM,
          ingredient: { id: 1, name: "Test" },
        }
      )
    ).toEqual({ ingredients: [{ id: 1, name: "Test" }] });
  });

  it("should handle REMOVE_CONSTRUCTOR_ITEM", () => {
    expect(
      burgerConstructorReducer(
        { ingredients: [{ id: 1, name: "Test", second_id: 1 }] },
        {
          type: types.REMOVE_CONSTRUCTOR_ITEM,
          id: 1,
        }
      )
    ).toEqual({ ingredients: [] });
  });

  it("should handle UPDATE_CONSTRUCTOR_BUN", () => {
    expect(
      burgerConstructorReducer(
        { bun: null },
        {
          type: types.UPDATE_CONSTRUCTOR_BUN,
          ingredient: { id: 1, name: "Test" },
        }
      )
    ).toEqual({ bun: { id: 1, name: "Test" } });
  });

  it("should handle MOVE_CONSTRUCTOR_ITEM", () => {
    expect(
      burgerConstructorReducer(
        {
          ingredients: [
            { second_id: 1, name: "Test" },
            { second_id: 2, name: "Test2" },
            { second_id: 3, name: "Test3" },
          ],
        },
        {
          type: types.MOVE_CONSTRUCTOR_ITEM,
          payload: { id: 3, atIndex: 0 },
        }
      )
    ).toEqual({
      ingredients: [
        { second_id: 3, name: "Test3" },
        { second_id: 1, name: "Test" },
        { second_id: 2, name: "Test2" },
      ],
    });
  });

  it("should handle RESET_CONSTRUCTOR", () => {
    expect(
      burgerConstructorReducer(
        {
          bun: { id: 1, name: "Test" },
          ingredients: [{ id: 1, name: "Test" }],
        },
        {
          type: types.RESET_CONSTRUCTOR,
        }
      )
    ).toEqual({ bun: null, ingredients: [] });
  });
});
