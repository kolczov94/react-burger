import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient-item.module.css";
import { useState } from "react";
import Modal from "../modal/modal";

export default function IngredientItem({ price, image, name }) {
  const [isOpen, setIsOpen] = useState(false);

  function showModal() {
    console.log("CLICK");
    setIsOpen(true);
  }

  return (
    <>
      <li className={`${styles.card} pl-4 pr-4`} onClick={showModal}>
        <span className={`${styles.counter} text text_type_digits-default`}>
          1
        </span>
        <img src={image} alt="" />
        <div className={styles.price}>
          <span className="text text_type_digits-default">{price}</span>
          <CurrencyIcon />
        </div>
        <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      </li>

      {isOpen && <Modal>"Hello"</Modal>}
    </>
  );
}

IngredientItem.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
