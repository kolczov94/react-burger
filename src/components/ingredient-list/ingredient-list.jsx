import PropTypes from "prop-types";

import IngredientItem from "../ingredient-item/ingredient-item";
import styles from "./ingredient-list.module.css";

export default function IngredientList({ list, handleCardClick }) {
  return (
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
  );
}

IngredientList.propTypes = {
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
};
