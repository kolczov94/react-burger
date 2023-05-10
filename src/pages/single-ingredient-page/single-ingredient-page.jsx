import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useSelector } from "react-redux";

import { selectorIngredients } from "../../services/selectors/ingredients";

export default function SingleIngredientPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ingredients = useSelector(selectorIngredients);
  const ingredientDetail = ingredients.filter((item) => item._id === id)[0];

  return (
    <>
      {ingredientDetail ? (
        <Modal title="Детали ингредиента" onClose={() => navigate("/")}>
          <IngredientDetails
            image={ingredientDetail?.image_large}
            name={ingredientDetail?.name}
            price={ingredientDetail?.price}
            calories={ingredientDetail?.calories}
            carbohydrates={ingredientDetail?.carbohydrates}
            fat={ingredientDetail?.fat}
            proteins={ingredientDetail?.proteins}
          />
        </Modal>
      ) : null}
    </>
  );
}
