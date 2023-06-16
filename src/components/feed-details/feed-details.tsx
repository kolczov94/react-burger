import { FC, useMemo } from "react";
import styles from "./feed-details.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedCardIcon from "../feed-card-icon/feed-card-icon";
import { TIngredient } from "../../types/ingredient";
import { feedStatus } from "../../utils/feedStatus";

type TFeedDetailsProps = {
  number: number;
  name: string;
  status: string;
  date: string;
  ingredients: TIngredient[];
};

const FeedDetails: FC<TFeedDetailsProps> = ({
  number,
  name,
  status,
  ingredients,
  date,
}) => {
  const total = useMemo(() => {
    return ingredients.reduce((total, current) => {
      return total + current.price;
    }, 0);
  }, [ingredients]);

  const composeIngredients = useMemo(() => {
    return ingredients.reduce(
      (acc: { [name: string]: TIngredient[] }, current) => {
        if (acc[current._id]) {
          acc[current._id].push(current);
        } else {
          acc[current._id] = [current];
        }
        return acc;
      },
      {}
    );
  }, [ingredients]);

  return (
    <div className={styles.details}>
      <span
        className={`${styles.number} text text_type_digits-default text_color_primary`}
      >
        #{number}
      </span>
      <h1 className="text text_type_main-medium text_color_primary mt-10">
        {name}
      </h1>
      <span className="text text_type_main-default text_color_success mt-3">
        {feedStatus(status)}
      </span>
      <h2 className="text text_type_main-medium text_color_primary mt-15">
        Состав:
      </h2>
      <div className={`${styles.wrapper} custom-scroll mt-6 pr-6`}>
        <ul className={styles.list}>
          {Object.keys(composeIngredients).map((key) => {
            const current = composeIngredients[key];
            return (
              <li className={styles.listItem} key={current[0]._id}>
                <div className={styles.group}>
                  <FeedCardIcon type="primary" image={current[0].image} />
                  <div className="text text_type_main-default text_color_primary ml-4">
                    {current[0].name}
                  </div>
                </div>
                <div className={`${styles.total} ml-4`}>
                  <div className="text text_type_digits-default text_color_primary mr-2">
                    {current.length} x {current[0].price}
                  </div>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${styles.footer} mt-10`}>
        <FormattedDate
          date={new Date(date)}
          className="text text_type_main-default text_color_inactive"
        />
        <div className={styles.total}>
          <span className="text text_type_digits-default text_color_primary mr-2">
            {total}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedDetails;
