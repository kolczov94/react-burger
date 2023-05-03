import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";

import IngredientGroup from "../ingredient-group/ingredient-group";
import TabMenu from "../tab-menu/tab-menu";

import { updateCurrentTab } from "../../services/actions/ingredients";
import { useObserver } from "../../hooks/use-observer";
import { selectorIngredients } from "../../services/selectors/ingredients";

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectorIngredients);

  const filteredIngredients = useMemo(() => {
    const bun = ingredients.filter((item) => item.type === "bun");
    const sauce = ingredients.filter((item) => item.type === "sauce");
    const main = ingredients.filter((item) => item.type === "main");
    return { bun, sauce, main };
  }, [ingredients]);

  const { addObserverTarget, rootRef, visibleSectionId, scrollToTarget } =
    useObserver();

  useEffect(() => {
    dispatch(updateCurrentTab(visibleSectionId));
  }, [visibleSectionId, dispatch]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.nav}>
        <TabMenu scrollToTarget={scrollToTarget} />
      </nav>
      <div ref={rootRef} className={`${styles.list} mt-10 custom-scroll`}>
        <IngredientGroup
          title="Булки"
          name="bun"
          list={filteredIngredients.bun}
          addObserverTarget={addObserverTarget}
        />
        <IngredientGroup
          title="Соусы"
          name="sauce"
          list={filteredIngredients.sauce}
          addObserverTarget={addObserverTarget}
        />
        <IngredientGroup
          title="Начинки"
          name="main"
          list={filteredIngredients.main}
          addObserverTarget={addObserverTarget}
        />
      </div>
    </section>
  );
}
