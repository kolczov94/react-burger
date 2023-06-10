import { FC } from "react";
import styles from "./order-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderCardProps = {
  title: string;
  number: number;
};

const OrderCard: FC<TOrderCardProps> = ({ title, number }) => {
  return (
    <div className={`${styles.card} p-6`}>
      <div className={styles.header}>
        <span className="text text_type_digits-default">#{number}</span>
        <span className="text text_type_main-default text_color_inactive">
          today
        </span>
      </div>
      <p className="text text_type_main-medium">{title}</p>
      <div className={styles.group}>
        <div className={styles.ingredients}>
          <div className={styles.icon_wrapper}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.icon_wrapper}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.icon_wrapper}>
            <div className={styles.icon}></div>
          </div>
        </div>
        <div className={styles.total}>
          <CurrencyIcon type="primary" />
          <span className="text text_type_digits-default ml-4">480</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
