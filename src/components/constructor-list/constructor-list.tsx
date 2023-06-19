import { useDrop } from "react-dnd";
import styles from "./constructor-list.module.css";

import ConstructorItem from "../constructor-item/constructor-item";
import { selectorBurgerConstructorIngredients } from "../../services/selectors/burger-constructor";
import { FC } from "react";
import { useDispatch, useSelector } from "../../services/store";
import { incrementIngredientCountAction } from "../../services/actions/ingredients";
import { addConstructorItemThunk } from "../../services/actions/burger-constructor";

const ConstructorList: FC = () => {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    selectorBurgerConstructorIngredients
  );

  const [{ isHover, canDrop }, dropTarget] = useDrop<
    { id: string },
    void,
    { isHover: boolean; canDrop: boolean }
  >({
    accept: ["main", "sauce"],
    drop({ id }) {
      dispatch(addConstructorItemThunk(id));
      dispatch(incrementIngredientCountAction(id));
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
        constructorIngredients.map((item, index) => {
          return (
            <ConstructorItem
              key={item.second_id}
              id={item._id}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
              constructorId={item.second_id}
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
