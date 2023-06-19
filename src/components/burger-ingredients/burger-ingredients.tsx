import { useMemo, useEffect, FC } from "react";
import styles from "./burger-ingredients.module.css";

import IngredientGroup from "../ingredient-group/ingredient-group";
import TabMenu from "../tab-menu/tab-menu";

import { useObserver } from "../../hooks/use-observer";
import { selectorIngredients } from "../../services/selectors/ingredients";
import { EIngredientTabs } from "../../types/ingredient";
import { useDispatch, useSelector } from "../../services/store";
import { updateCurrentTabAction } from "../../services/actions/ingredients";

const BurgerIngredients: FC = () => {
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
    dispatch(
      updateCurrentTabAction(
        EIngredientTabs[visibleSectionId as keyof typeof EIngredientTabs]
      )
    );
  }, [visibleSectionId, dispatch]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.nav} data-test-id="ingredients-menu">
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
