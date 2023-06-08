import { useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item-bun.module.css";

import { selectorBurgerConstructorBun } from "../../services/selectors/burger-constructor";
import { FC } from "react";
import { useDispatch, useSelector } from "../../services/store";
import { updateIngredientCountBunAction } from "../../services/actions/ingredients";
import { updateConstructorBunThunk } from "../../services/actions/burger-constructor";

type IConstructorItemBunProps = {
  type?: "top" | "bottom";
};

const ConstructorItemBun: FC<IConstructorItemBunProps> = ({ type }) => {
  const dispatch = useDispatch();
  const constructorBun = useSelector(selectorBurgerConstructorBun);

  const [{ isHover, canDrop }, dropRef] = useDrop<
    { id: string },
    void,
    { isHover: boolean; canDrop: boolean }
  >({
    accept: "bun",
    drop({ id }) {
      if (constructorBun && id !== constructorBun._id) {
        dispatch(updateConstructorBunThunk(id));
        dispatch(updateIngredientCountBunAction(id));
      }
    },
    collect: (monitor) => {
      return { isHover: monitor.isOver(), canDrop: monitor.canDrop() };
    },
  });

  return (
    <div
      className={`ml-8 mr-4 ${styles.container} ${
        type === "top" ? styles.border_top : styles.border_bottom
      } ${canDrop ? styles.drag : ""} ${isHover ? styles.hover : ""}`}
      ref={dropRef}
    >
      {constructorBun && constructorBun._id ? (
        <ConstructorElement
          type={type}
          isLocked={true}
          text={`${constructorBun.name} ${type === "top" ? "(верх)" : "(низ)"}`}
          price={constructorBun.price}
          thumbnail={constructorBun.image}
        />
      ) : (
        <div
          className={`${styles.template} ${
            type === "top" ? styles.border_top : styles.border_bottom
          } text text_type_main-default pt-4 pb-4 pl-6 pr-6`}
        >
          <span>Перенесите булочку сюда</span>
        </div>
      )}
    </div>
  );
};

export default ConstructorItemBun;
