import IngredientItem from "../IngredientItem/IngredientItem";
import styles from "./IngredientList.module.css";

export default function IngredientList({ list }) {
  return (
    <ul className={`${styles.list} ml-4 mr-1 mt-6 mb-10`}>
      {list.map((item) => {
        return (
          <IngredientItem
            key={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </ul>
  );
}
