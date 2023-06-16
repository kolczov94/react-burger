import { useEffect } from "react";
import styles from "./feed-page.module.css";
import { useDispatch, useSelector } from "../../services/store";
import { wsConnectAction, wsDisconnectAction } from "../../services/actions/ws";
import {
  selectorWsOrders,
  selectorWsStatus,
  selectorWsTotal,
  selectorWsTotalToday,
} from "../../services/selectors/ws";
import OrderIngredientList from "../../components/feed-list/feed-list";
import FeedInfo from "../../components/feed-info/feed-info";
import Loader from "../../components/loader/loader";
import PageWrapper from "../../components/page-wrapper/page-wrapper";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectorWsOrders);
  const total = useSelector(selectorWsTotal);
  const totalToday = useSelector(selectorWsTotalToday);
  const isConnected = useSelector(selectorWsStatus);

  useEffect(() => {
    dispatch(wsConnectAction());

    return () => {
      dispatch(wsDisconnectAction());
    };
  }, [dispatch]);

  return (
    <>
      {isConnected ? (
        <main className={`${styles.main} pl-5 pr-5 pb-10`}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            Лента заказов
          </h1>
          <div className={styles.columns}>
            <OrderIngredientList orders={orders} path="/feed" />
            <FeedInfo orders={orders} total={total} totalToday={totalToday} />
          </div>
        </main>
      ) : (
        <PageWrapper>
          <Loader />
        </PageWrapper>
      )}
    </>
  );
};

export default OrderPage;
