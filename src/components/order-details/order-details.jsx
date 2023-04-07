import styles from "./order-details.module.css";
import imageDone from "../../images/done.png";

export default function OrderDetails() {
  return (
    <div className={`${styles.order} pt-20 pb-20`}>
      <span className={`${styles.number} text text_type_digits-large`}>
        034536
      </span>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={imageDone} alt="Выполнено" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
