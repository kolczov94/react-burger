import { FC } from "react";
import styles from "./feed-list.module.css";
import FeedCard from "../feed-card/feed-card";
import { TOrderWsItem } from "../../types/order";
import { Link, useLocation } from "react-router-dom";

type TFeedListProps = {
  orders: Array<TOrderWsItem>;
  path: string;
};

const FeedList: FC<TFeedListProps> = ({ orders, path }) => {
  const location = useLocation();
  return (
    <div className={`${styles.wrapper} custom-scroll pr-2`}>
      <ul className={styles.list}>
        {orders.map((order) => {
          return (
            <li key={order._id}>
              <Link
                to={`${path}/${order.number}`}
                state={{ backgroundLocation: location }}
                className={styles.link}
              >
                <FeedCard
                  title={order.name}
                  number={order.number}
                  idIngredients={order.ingredients}
                  date={order.createdAt}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedList;
