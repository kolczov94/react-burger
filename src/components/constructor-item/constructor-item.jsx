import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";

import moveIcon from "../../images/move-icon.svg";
import {
  decrementIngredientCount,
  moveConstructorItem,
  removeConstructorList,
} from "../../services/actions/ingredients";

export default function ConstructorItem({
  id,
  index,
  secondId,
  name,
  price,
  image,
}) {
  const dispatch = useDispatch();

  const [{ isDrag }, dragRef, previewRef] = useDrag(
    () => ({
      type: "item",
      item: { id: secondId, index },
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

  function handleRemoveClick() {
    dispatch(removeConstructorList(secondId));
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
}

ConstructorItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  secondId: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
