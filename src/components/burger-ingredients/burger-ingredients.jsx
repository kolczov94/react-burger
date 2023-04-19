import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import IngredientGroup from "../ingredient-group/ingredient-group";
import styles from "./burger-ingredients.module.css";
import TabMenu from "../tab-menu/tab-menu";
import useModalStatus from "../../hooks/use-modal-status";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { updateCurrentTab } from "../../services/actions/ingredients";
import { useObserver } from "../../hooks/use-observer";

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => ({
    ingredients: state.ingredients.items,
    currentTab: state.ingredients.currentTab,
  }));
  const [currentCardId, setCurrentCardId] = useState(null);
  const { modalStatus, openModal, closeModal } = useModalStatus();

  const filteredIngredients = useMemo(() => {
    const bun = ingredients.filter((item) => item.type === "bun");
    const sauce = ingredients.filter((item) => item.type === "sauce");
    const main = ingredients.filter((item) => item.type === "main");
    return { bun, sauce, main };
  }, [ingredients]);

  const currentCard = useMemo(
    () => ingredients.find((item) => item._id === currentCardId),
    [currentCardId, ingredients]
  );

  const handleCardClick = useCallback(
    (id) => {
      setCurrentCardId(id);
      openModal();
    },
    [openModal]
  );

  const listRef = useRef();
  const { observer, visibleSectionId } = useObserver(listRef.current);

  useEffect(() => {
    dispatch(updateCurrentTab(visibleSectionId));
  }, [visibleSectionId, dispatch]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav className={styles.nav}>
        <TabMenu />
      </nav>
      <div ref={listRef} className={`${styles.list} mt-10 custom-scroll`}>
        <IngredientGroup
          title="Булки"
          name="bun"
          list={filteredIngredients.bun}
          handleCardClick={handleCardClick}
          observer={observer}
        />
        <IngredientGroup
          title="Соусы"
          name="sauce"
          list={filteredIngredients.sauce}
          handleCardClick={handleCardClick}
          observer={observer}
        />
        <IngredientGroup
          title="Начинки"
          name="main"
          list={filteredIngredients.main}
          handleCardClick={handleCardClick}
          observer={observer}
        />
      </div>
      {modalStatus && (
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails
            image={currentCard.image_large}
            name={currentCard.name}
            price={currentCard.price}
            calories={currentCard.calories}
            carbohydrates={currentCard.carbohydrates}
            fat={currentCard.fat}
            proteins={currentCard.proteins}
          />
        </Modal>
      )}
    </section>
  );
}
