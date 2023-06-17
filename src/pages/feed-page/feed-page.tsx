import { useEffect } from "react";
import styles from "./feed-page.module.css";
import { useDispatch, useSelector } from "../../services/store";
import { wsConnectAction, wsDisconnectAction } from "../../services/actions/ws";

import OrderIngredientList from "../../components/feed-list/feed-list";
import FeedInfo from "../../components/feed-info/feed-info";
import Loader from "../../components/loader/loader";
import PageWrapper from "../../components/page-wrapper/page-wrapper";
import {
  selectorFeed,
  selectorFeedStatus,
  selectorFeedTotal,
  selectorFeedTotalToday,
} from "../../services/selectors/feed";
import { WS_URL } from "../../utils/api";

const FeedPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectorFeed);
  const total = useSelector(selectorFeedTotal);
  const totalToday = useSelector(selectorFeedTotalToday);
  const isConnected = useSelector(selectorFeedStatus);

  useEffect(() => {
    dispatch(wsConnectAction(`${WS_URL}/orders/all`));

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

export default FeedPage;
