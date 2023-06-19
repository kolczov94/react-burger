import { FC, useMemo } from "react";
import styles from "./feed-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/store";
import { selectorIngredients } from "../../services/selectors/ingredients";
import FeedCardIcon from "../feed-card-icon/feed-card-icon";
import { TIngredient } from "../../types/ingredient";

type TOrderCardProps = {
  title: string;
  date: string;
  number: number;
  idIngredients: Array<string>;
};

const FeedCard: FC<TOrderCardProps> = ({
  title,
  number,
  idIngredients,
  date,
}) => {
  const ingredients = useSelector(selectorIngredients);

  const filteredIngredients = useMemo(() => {
    return idIngredients.reduce((acc: Array<TIngredient>, id: string) => {
      const current = ingredients.find((item) => item._id === id);
      if (current) {
        acc.push({ ...current, second_id: crypto.randomUUID() });
      }
      return acc;
    }, []);
  }, [idIngredients, ingredients]);

  const totalSum = useMemo(() => {
    let total = filteredIngredients.reduce(
      (sum, current): number => sum + current.price,
      0
    );
    return total;
  }, [filteredIngredients]);

  return (
    <div className={`${styles.card} p-6`}>
      <div className={styles.header}>
        <span className="text text_type_digits-default text_color_primary">
          #{number}
        </span>
        <span className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(date)} />
        </span>
      </div>
      <p className="text text_type_main-medium text_color_primary">{title}</p>
      <div className={styles.group}>
        <div className={styles.icons}>
          {filteredIngredients &&
            filteredIngredients.slice(0, 5).map((ingredient, index) => {
              return ingredient ? (
                <FeedCardIcon
                  key={ingredient.second_id}
                  image={ingredient.image}
                  type="primary"
                  customStyles={{ zIndex: 5 - index }}
                />
              ) : null;
            })}
          {filteredIngredients.length > 5 && filteredIngredients[5] && (
            <FeedCardIcon
              image={filteredIngredients[5].image}
              type="secondary"
              count={filteredIngredients.length - 5}
            />
          )}
        </div>
        <div className={styles.total}>
          <CurrencyIcon type="primary" />
          <span className="text text_type_digits-default text_color_primary ml-4">
            {totalSum}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
