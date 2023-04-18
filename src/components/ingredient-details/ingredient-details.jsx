import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

export default function IngredientDetails({
  image,
  name,
  calories,
  carbohydrates,
  fat,
  proteins,
}) {
  return (
    <div className={`${styles.details} pb-5`}>
      <img className={styles.image} src={image} alt={name} />
      <p className={`${styles.name} text text_type_main-medium mt-4`}>{name}</p>
      <ul className={`${styles.nutritionList} mt-8`}>
        <li className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Каллории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {calories}
          </span>
        </li>
        <li className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {proteins}
          </span>
        </li>
        <li className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {fat}
          </span>
        </li>
        <li className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
};
