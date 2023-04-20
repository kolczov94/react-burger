import { useDispatch, useSelector } from "react-redux";
import styles from "./constructor-list.module.css";
import moveIcon from "../../images/move-icon.svg";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import {
  addConstructorList,
  removeConstructorList,
} from "../../services/actions/ingredients";

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
      className={`${styles.elements} ${
        canDrop ? styles.drag : ""
      } custom-scroll`}
    >
      {constructorList.length ? (
        constructorList.map((item) => {
          return (
            <div className={`${styles.item} mr-2`} key={item._id}>
              <img className="mr-2" src={moveIcon} alt="move icon" />
              <ConstructorElement
                handleClose={() => dispatch(removeConstructorList(item._id))}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
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
