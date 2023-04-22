export const ADD_CONSTRUCTOR_ITEM = "ADD_CONSTRUCTOR_ITEM";
export const REMOVE_CONSTRUCTOR_ITEM = "REMOVE_CONSTRUCTOR_ITEM";
export const MOVE_CONSTRUCTOR_ITEM = "MOVE_CONSTRUCTOR_ITEM";
export const UPDATE_CONSTRUCTOR_BUN = "UPDATE_INGREDIENTS_DETAIL";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

export function updateConstructorBun(id) {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredientBun = [...ingredients.items].find(
      (item) => item._id === id
    );
    dispatch({
      type: UPDATE_CONSTRUCTOR_BUN,
      payload: ingredientBun,
    });
  };
}

export function addConstructorItem(id) {
  return (dispatch, getState) => {
    const { ingredients } = getState();
    const ingredient = [...ingredients.items].find((item) => item._id === id);
    dispatch({
      type: ADD_CONSTRUCTOR_ITEM,
      payload: { ...ingredient, constructor_id: crypto.randomUUID() },
    });
  };
}

export function removeConstructorItem(payload) {
  return {
    type: REMOVE_CONSTRUCTOR_ITEM,
    payload,
  };
}

export function moveConstructorItem(payload) {
  return {
    type: MOVE_CONSTRUCTOR_ITEM,
    payload,
  };
}

export function resetBurgerConstructor() {
  return {
    type: RESET_CONSTRUCTOR,
  };
}
