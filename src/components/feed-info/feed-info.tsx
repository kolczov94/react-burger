import { FC } from "react";
import styles from "./feed-info.module.css";
import { TOrderWsItem } from "../../types/order";

type TFeedInfoProps = {
  orders: TOrderWsItem[];
  total: number;
  totalToday: number;
};

const FeedInfo: FC<TFeedInfoProps> = ({ orders, total, totalToday }) => {
  const ordersSuccess = orders.reduce((acc: number[], current) => {
    if (current.status === "done") acc.push(current.number);
    return acc;
  }, []);

  const ordersInJob = orders.reduce((acc: number[], current) => {
    if (current.status === "created" || current.status === "pending")
      acc.push(current.number);
    return acc;
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.lists}>
        <div>
          <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
          <div className={styles.numbers}>
            {ordersSuccess.slice(0, 10).map((item) => {
              return (
                <p
                  key={item}
                  className="text text_type_digits-default text_color_success"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <div className={styles.numbers}>
            {ordersInJob.slice(0, 10).map((item) => {
              return (
                <p
                  key={item}
                  className="text text_type_digits-default text_color_primary"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`${styles.total} mt-15`}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <span className="text text_type_digits-large">{total}</span>
      </div>
      <div className={`${styles.total} mt-15`}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <span className="text text_type_digits-large">{totalToday}</span>
      </div>
    </div>
  );
};

export default FeedInfo;
