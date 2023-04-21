import { useDispatch, useSelector } from "react-redux";
import styles from "./constructor-list.module.css";
import { useDrop } from "react-dnd";
import { addConstructorList } from "../../services/actions/ingredients";
import ConstructorItem from "../constructor-item/constructor-item";

export default function ConstructorList() {
  const dispatch = useDispatch();
  const constructorList = useSelector(
    (state) => state.ingredients.constructorList
  );
  const [{ isHover, canDrop }, dropTarget] = useDrop({
    accept: ["main", "sauce"],
    drop(itemId) {
      dispatch(addConstructorList(itemId.id));
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
      {constructorList.length ? (
        constructorList.map((item, index) => {
          return (
            <ConstructorItem
              key={item.second_id}
              id={item.second_id}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
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
}