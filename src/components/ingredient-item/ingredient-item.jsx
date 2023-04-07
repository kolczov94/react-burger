import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import useModalStatus from "../../hooks/use-modal-status";

export default function IngredientItem({
  price,
  image,
  name,
  calories,
  carbohydrates,
  fat,
  proteins,
  imageLarge,
}) {
  const { modalStatus, openModal, closeModal } = useModalStatus();

  return (
    <>
      <li className={`${styles.card} pl-4 pr-4`} onClick={() => openModal()}>
        <Counter count={1} size="default" />
        <img src={image} alt="" />
        <div className={styles.price}>
          <span className="text text_type_digits-default">{price}</span>
          <CurrencyIcon />
        </div>
        <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      </li>

      {modalStatus && (
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails
            image={imageLarge}
            name={name}
            price={price}
            calories={calories}
            carbohydrates={carbohydrates}
            fat={fat}
            proteins={proteins}
          />
        </Modal>
      )}
    </>
  );
}

IngredientItem.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
