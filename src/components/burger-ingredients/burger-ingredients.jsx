import { useMemo } from "react";
import PropTypes from "prop-types";

import IngredientList from "../ingredient-list/ingredient-list";
import styles from "./burger-ingredients.module.css";
import TabMenu from "../tab-menu/tab-menu";
import { TAB_MENU_DEFAULT, TAB_MENU_LIST } from "../../utils/constants";

export default function BurgerIngredients({ ingredients }) {
  const filteredIngredients = useMemo(() => {
    const bun = ingredients.filter((item) => item.type === "bun");
    const sauce = ingredients.filter((item) => item.type === "sauce");
    const main = ingredients.filter((item) => item.type === "main");
    return {bun, sauce, main}
  }, [ingredients]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.nav}>
        <TabMenu tabs={TAB_MENU_LIST} tabDefault={TAB_MENU_DEFAULT} />
      </nav>
      <div className={`${styles.list} mt-10 custom-scroll`}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <IngredientList list={filteredIngredients.bun} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <IngredientList list={filteredIngredients.sauce} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <IngredientList list={filteredIngredients.main} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
