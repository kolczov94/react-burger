import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import IngredientList from "../IngredientList/IngredientList";
import styles from "./BurgerIngredients.module.css";

export default function BurgerIngredients({data}) {
  const [current, setCurrent] = useState("one");
  return (
    <section>
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
        <IngredientList list={data.filter((item) => item.type === "bun")} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <IngredientList list={data.filter((item) => item.type === "sauce")} />
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <IngredientList list={data.filter((item) => item.type === "main")} />
      </div>
    </section>
  );
}
