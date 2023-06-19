import { FC, useEffect } from "react";
import OrderIngredientList from "../../components/feed-list/feed-list";
import { useDispatch, useSelector } from "../../services/store";
import { wsConnectAction, wsDisconnectAction } from "../../services/actions/ws";
import { selectorFeedUser } from "../../services/selectors/feed-user";
import { WS_URL } from "../../utils/api";
import { getCookie } from "../../utils/cookie";

interface ProfileOrdersPageProps {}

const ProfileOrdersPage: FC<ProfileOrdersPageProps> = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectorFeedUser);

  useEffect(() => {
    dispatch(wsConnectAction(`${WS_URL}/orders?token=${getCookie("token")}`));

    return () => {
      dispatch(wsDisconnectAction());
    };
  }, [dispatch]);
  return (
    <OrderIngredientList orders={orders.reverse()} path="/profile/orders" />
  );
};

export default ProfileOrdersPage;
