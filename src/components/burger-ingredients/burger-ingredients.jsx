import { useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientList from "../ingredient-list/ingredient-list";
import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = useState("one");
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.nav}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.list} mt-10 custom-scroll`}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <IngredientList list={ingredients.filter((item) => item.type === "bun")} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <IngredientList list={ingredients.filter((item) => item.type === "sauce")} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <IngredientList list={ingredients.filter((item) => item.type === "main")} />
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