export function selectorIngredientDetail(state) {
  return {
    ingredientDetail: state.ingredientDetail.ingredient,
    isShowIngredientDetail: state.ingredientDetail.isShow,
  };
}
