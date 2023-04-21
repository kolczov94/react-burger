import styles from "./constructor-item.module.css";
import moveIcon from "../../images/move-icon.svg";
import { useDispatch } from "react-redux";
import {
  moveConstructorItem,
  removeConstructorList,
} from "../../services/actions/ingredients";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";

export default function ConstructorItem({ name, price, image, id, index }) {
  const dispatch = useDispatch();

  const [{ opacity }, dragRef, previewRef] = useDrag(
    () => ({
      type: "item",
      item: { id, index },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,
      }),
      end: (item, monitor) => {
        if (!monitor.didDrop()) {
          dispatch(moveConstructorItem({ id: item.id, atIndex: item.index }));
        }
      },
    }),
    [id, index]
  );

  const [, dropRef] = useDrop(
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

  return (
    <div
      className={`${styles.item} mr-2`}
      style={{ opacity }}
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
        handleClose={() => dispatch(removeConstructorList(id))}
        text={name}
        price={price}
        thumbnail={image}
      />
    </div>
  );
}
