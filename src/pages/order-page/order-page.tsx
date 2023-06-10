import { useEffect } from "react";
import OrderCard from "../../components/order-card/order-card";
import styles from "./order-page.module.css";
import { useDispatch, useSelector } from "../../services/store";
import { wsConnectAction, wsDisconnectAction } from "../../services/actions/ws";
import {
  selectorWsOrders,
  selectorWsTotal,
  selectorWsTotalToday,
} from "../../services/selectors/ws";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectorWsOrders);
  const total = useSelector(selectorWsTotal);
  const totalToday = useSelector(selectorWsTotalToday);

  useEffect(() => {
    dispatch(wsConnectAction());

    return () => {
      dispatch(wsDisconnectAction());
    };
  }, [dispatch]);

  return (
    <main className={`${styles.main} pl-5 pr-5 pb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.columns}>
        <div className={`${styles.feed} custom-scroll`}>
          {orders.map((item) => {
            return (
              <OrderCard
                key={item._id}
                title={item.name}
                number={item.number}
              />
            );
          })}
        </div>
        <div className={styles.info}>
          <div className={styles.lists}>
            <div className={styles.success}>
              <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
            </div>
            <div className={styles.success}>
              <h2 className="text text_type_main-medium mb-6">В работе:</h2>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
              <p className="text text_type_digits-default text_color_success">
                12312312
              </p>
            </div>
          </div>
          <div className={`${styles.total} mt-15`}>
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <span className="text text_type_digits-large">{total}</span>
          </div>
          <div className={`${styles.total} mt-15`}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <span className="text text_type_digits-large">{totalToday}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
