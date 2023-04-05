import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient-item.module.css";

export default function IngredientItem({ price, image, name }) {
  return (
    <li className={`${styles.card} pl-4 pr-4`}>
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
  );
}

IngredientItem.propTypes = {
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
};
