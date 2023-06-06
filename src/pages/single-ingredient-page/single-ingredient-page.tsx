import { FC } from "react";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

import styles from "./single-ingredient-page.module.css";

import { selectorIngredients } from "../../services/selectors/ingredients";
import Loader from "../../components/loader/loader";
import { useSelector } from "../../services/store";

type TSingleIngredientPageProps = {
  showHeader: boolean;
};

const SingleIngredientPage: FC<TSingleIngredientPageProps> = ({
  showHeader,
}) => {
  const { id } = useParams();
  const ingredients = useSelector(selectorIngredients);
  const ingredientDetail = ingredients.filter((item) => item._id === id)[0];

  return (
    <>
      {ingredientDetail ? (
        <>
          {showHeader && (
            <h1 className={`text text_type_main-large mt-30 ${styles.title}`}>
              Детали ингредиента
            </h1>
          )}
          <IngredientDetails
            image={ingredientDetail?.image_large}
            name={ingredientDetail?.name}
            calories={ingredientDetail?.calories}
            carbohydrates={ingredientDetail?.carbohydrates}
            fat={ingredientDetail?.fat}
            proteins={ingredientDetail?.proteins}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleIngredientPage;
