import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import IngredientItem from "../ingredient-item/ingredient-item";
import styles from "./ingredient-group.module.css";

export default function IngredientGroup({
  list,
  handleCardClick,
  title,
  name,
  observer,
}) {
  const currentTab = useSelector((state) => state.ingredients.currentTab);
  const titleRef = useRef();

  useEffect(() => {
    if (name === currentTab) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentTab, name]);

  useEffect(() => {
    console.log("RENDER EFF OBS")
    if (observer) {
      const section = titleRef.current;
      observer.observe(section);
      return () => observer.unobserve(section);
    }
  }, [observer]);

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
              image={item.image}
              name={item.name}
              price={item.price}
              handleCardClick={handleCardClick}
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
  handleCardClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
