import { useMemo, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";

import IngredientGroup from "../ingredient-group/ingredient-group";
import TabMenu from "../tab-menu/tab-menu";

import { updateCurrentTab } from "../../services/actions/ingredients";
import { useObserver } from "../../hooks/use-observer";
import { selectorIngredients } from "../../services/selectors/ingredients";

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectorIngredients);

  const filteredIngredients = useMemo(() => {
    // @ts-ignore
    const bun = ingredients.filter((item) => item.type === "bun");
    // @ts-ignore
    const sauce = ingredients.filter((item) => item.type === "sauce");
    // @ts-ignore
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
};

export default BurgerIngredients;
