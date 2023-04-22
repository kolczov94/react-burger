export const OPEN_INGREDIENT_DETAIL = "OPEN_INGREDIENT_DETAIL";
export const CLOSE_INGREDIENT_DETAIL = "CLOSE_INGREDIENT_DETAIL";

export function openIngredientDetail(id) {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredient = [...ingredients.items].find((item) => item._id === id);
    dispatch({
      type: OPEN_INGREDIENT_DETAIL,
      payload: ingredient,
    });
  };
}

export function closeIngredientDetail() {
  return {
    type: CLOSE_INGREDIENT_DETAIL,
  };
}
