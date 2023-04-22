import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-group.module.css";

import IngredientItem from "../ingredient-item/ingredient-item";

export default function IngredientGroup({
  list,
  title,
  name,
  addObserverTarget,
}) {
  const titleRef = useRef();

  useEffect(() => {
    if (titleRef.current) {
      addObserverTarget({ key: name, target: titleRef.current });
    }
  }, [addObserverTarget, name]);

  return (
    <div>
      <h2 id={name} ref={titleRef} className="text text_type_main-medium">
        {title}
      </h2>
      <ul className={`${styles.list} ml-4 mr-1 mt-6 mb-10`}>
        {list.map((item) => {
          return (
            <IngredientItem
              key={item._id}
              id={item._id}
              type={item.type}
              image={item.image}
              name={item.name}
              price={item.price}
              count={item.count}
            />
          );
        })}
      </ul>
    </div>
  );
}

IngredientGroup.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ),
  addObserverTarget: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
