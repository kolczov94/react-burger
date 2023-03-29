import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./BurgerIngredients.module.css";

export default function BurgerIngredients() {
  const [current, setCurrent] = useState("one");
  return (
    <section>
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
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
      <div>
        <p className="text text_type_main-medium mb-6">Булки</p>
        <ul>
          <li>123</li>
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
        <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
      </div>
    </section>
  );
}
