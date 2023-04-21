import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item-bun.module.css";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { updateConstructorBun } from "../../services/actions/ingredients";

export default function ConstructorItemBun({ type }) {
  const dispatch = useDispatch();
  const { constructorBun } = useSelector((state) => ({
    constructorBun: state.ingredients.constructorBun,
  }));
  const [{ isHover, canDrop }, dropRef] = useDrop({
    accept: "bun",
    drop(itemId) {
      dispatch(updateConstructorBun(itemId.id));
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
      {constructorBun ? (
        <ConstructorElement
          type={type}
          isLocked={true}
          text={constructorBun.name}
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
}
