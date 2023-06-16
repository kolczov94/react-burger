import { FC, useEffect } from "react";
import OrderIngredientList from "../../components/feed-list/feed-list";
import { useDispatch, useSelector } from "../../services/store";
import { selectorWsOrders } from "../../services/selectors/ws";
import {
  wsDisconnectAction,
  wsProtectedConnectAction,
} from "../../services/actions/ws";

interface ProfileOrdersPageProps {}

const ProfileOrdersPage: FC<ProfileOrdersPageProps> = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectorWsOrders);

  useEffect(() => {
    dispatch(wsProtectedConnectAction());

    return () => {
      dispatch(wsDisconnectAction());
    };
  }, [dispatch]);
  return <OrderIngredientList orders={orders} path="/profile/orders" />;
};

export default ProfileOrdersPage;
