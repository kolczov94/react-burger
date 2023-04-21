import { memo } from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";

function IngredientItem({
  id,
  name,
  price,
  image,
  handleCardClick,
  type,
  count,
}) {
  const [{ isDrag }, dragRef] = useDrag({
    type,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      draggable
      ref={dragRef}
      className={`${styles.card} pl-4 pr-4 ${isDrag ? styles.dragged : ""}`}
      onClick={() => handleCardClick(id)}
    >
      {count ? <Counter count={count} size="default" /> : null}
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

export default memo(IngredientItem);
