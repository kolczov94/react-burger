import { FC, useEffect } from "react";
import FeedDetails from "../../components/feed-details/feed-details";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/store";
import { selectorIngredients } from "../../services/selectors/ingredients";
import { TIngredient } from "../../types/ingredient";
import Loader from "../../components/loader/loader";
import { getSingleOrderThunk } from "../../services/actions/feed";
import { selectorFeed } from "../../services/selectors/feed";

const SingleFeedPage: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orders = useSelector(selectorFeed);
  const ingredients = useSelector(selectorIngredients);
  let currentOrder;
  let currentIngredients;

  useEffect(() => {
    if (!orders.length && id) {
      dispatch(getSingleOrderThunk(id));
    }
  }, [orders, dispatch, id]);

  if (orders.length && ingredients.length && id) {
    currentOrder = orders.filter((item) => item.number === parseInt(id))[0];
    if (currentOrder) {
      currentIngredients = currentOrder.ingredients.reduce(
        (acc: TIngredient[], id) => {
          const ingredient = ingredients.find((item) => item._id === id);
          if (ingredient) acc.push(ingredient);
          return acc;
        },
        []
      );
    }
  }

  return (
    <>
      {currentOrder && currentIngredients ? (
        <FeedDetails
          number={currentOrder.number}
          name={currentOrder.name}
          status={currentOrder.status}
          ingredients={currentIngredients}
          date={currentOrder.createdAt}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleFeedPage;
