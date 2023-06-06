import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";

import moveIcon from "../../images/move-icon.svg";
import {
  moveConstructorItem,
  removeConstructorItem,
} from "../../services/actions/burger-constructor";
import { decrementIngredientCount } from "../../services/actions/ingredients";
import { FC } from "react";

type IConstructorItemProps = {
  id: string;
  index: number;
  constructorId: string;
  name: string;
  price: number;
  image: string;
};

const ConstructorItem: FC<IConstructorItemProps> = ({
  id,
  index,
  constructorId,
  name,
  price,
  image,
}) => {
  const dispatch = useDispatch();

  const [{ isDrag }, dragRef, previewRef] = useDrag(
    () => ({
      type: "item",
      item: { id: constructorId, index },
      collect: (monitor) => ({
        isDrag: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        if (!monitor.didDrop()) {
          dispatch(moveConstructorItem({ id: item.id, atIndex: item.index }));
        }
      },
    }),
    [id, index]
  );

  const [, dropRef] = useDrop<{ id: string }>(
    () => ({
      accept: "item",
      hover(item, monitor) {
        if (item.id !== id) {
          dispatch(moveConstructorItem({ id: item.id, atIndex: index }));
        }
      },
    }),
    [index]
  );

  function handleRemoveClick() {
    dispatch(removeConstructorItem(constructorId));
    dispatch(decrementIngredientCount(id));
  }

  return (
    <div
      className={`${styles.item} ${isDrag ? styles.drag : ""} mr-2`}
      ref={(node) => dropRef(previewRef(node))}
      draggable
    >
      <img
        ref={dragRef}
        className={`${styles.move} mr-2`}
        src={moveIcon}
        alt="move icon"
      />
      <ConstructorElement
        handleClose={handleRemoveClick}
        text={name}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};

export default ConstructorItem;
