import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import styles from "./constructor-list.module.css";

import ConstructorItem from "../constructor-item/constructor-item";
import { addConstructorItem } from "../../services/actions/burger-constructor";
import { incrementIngredientCount } from "../../services/actions/ingredients";
import { selectorBurgerConstructorIngredients } from "../../services/selectors/burger-constructor";
import { FC } from "react";

const ConstructorList: FC = () => {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    selectorBurgerConstructorIngredients
  );

  // @ts-ignore
  const [{ isHover, canDrop }, dropTarget] = useDrop({
    accept: ["main", "sauce"],
    // @ts-ignore
    drop({ id }) {
      // @ts-ignore
      dispatch(addConstructorItem(id));
      dispatch(incrementIngredientCount(id));
    },
    collect: (monitor) => {
      return { isHover: monitor.isOver(), canDrop: monitor.canDrop() };
    },
  });

  return (
    <div
      ref={dropTarget}
      className={`${styles.elements} ${canDrop ? styles.drag : ""} ${
        isHover ? styles.hover : ""
      } custom-scroll`}
    >
      {constructorIngredients.length ? (
        // @ts-ignore
        constructorIngredients.map((item, index) => {
          return (
            <ConstructorItem
              key={item.constructor_id}
              id={item._id}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
              constructorId={item.constructor_id}
            />
          );
        })
      ) : (
        <div className={`${styles.template} mr-2`}>
          <span className="text text_type_main-default">
            Перенесите ингредиент сюда
          </span>
        </div>
      )}
    </div>
  );
};

export default ConstructorList;
