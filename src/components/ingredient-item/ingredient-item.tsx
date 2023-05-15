import { FC, memo } from "react";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";
import { Link, useLocation } from "react-router-dom";

interface IIngredientItem {
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  count: number;
}

const IngredientItem: FC<IIngredientItem> = ({
  id,
  name,
  price,
  image,
  type,
  count,
}) => {
  const location = useLocation();

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
      className={`pl-4 pr-4 ${isDrag ? styles.dragged : ""}`}
    >
      <Link
        className={styles.link}
        to={`/ingredients/${id}`}
        state={{ backgroundLocation: location }}
      >
        <div className={styles.card}>
          {count ? <Counter count={count} size="default" /> : null}
          <img src={image} alt="" />
          <div className={styles.price}>
            <span className="text text_type_digits-default text_color_primary">
              {price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <p
            className={`${styles.name} text text_type_main-default text_color_primary`}
          >
            {name}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default memo(IngredientItem);
