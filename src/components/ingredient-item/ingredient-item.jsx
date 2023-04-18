import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";

export default function IngredientItem({
  id,
  name,
  price,
  image,
  handleCardClick,
}) {
  return (
    <li
      className={`${styles.card} pl-4 pr-4`}
      onClick={() => handleCardClick(id)}
    >
      <Counter count={1} size="default" />
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};
