import { FC, useMemo } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import {
  closeOrderDetailAction,
  getOrderThunk,
} from "../../services/actions/order";
import {
  selectorBurgerConstructorBun,
  selectorBurgerConstructorIngredients,
} from "../../services/selectors/burger-constructor";
import {
  selectorIsShowOrder,
  selectorOrderRequest,
} from "../../services/selectors/order";
import { useNavigate } from "react-router-dom";
import { selectorUser } from "../../services/selectors/user";
import { useDispatch, useSelector } from "../../services/store";
import { resetIngredientCountAction } from "../../services/actions/ingredients";
import { resetBurgerConstructorAction } from "../../services/actions/burger-constructor";
import Loader from "../loader/loader";
import PageWrapper from "../page-wrapper/page-wrapper";

const Order: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const constructorIngredients = useSelector(
    selectorBurgerConstructorIngredients
  );
  const constructorBun = useSelector(selectorBurgerConstructorBun);
  const orderRequest = useSelector(selectorOrderRequest);
  const isShowOrder = useSelector(selectorIsShowOrder);
  const user = useSelector(selectorUser);

  const isLockedButton =
    Boolean(constructorIngredients.length) || Boolean(constructorBun);

  const totalSum = useMemo(() => {
    let total = constructorIngredients.reduce(
      (sum: number, current: { price: number }): number => sum + current.price,
      0
    );

    if (constructorBun && constructorBun._id) {
      return total + constructorBun.price * 2;
    }
    return total;
  }, [constructorIngredients, constructorBun]);

  function handleClickOrder() {
    user ? dispatch(getOrderThunk()) : navigate("/login");
  }

  function handleCloseModal() {
    dispatch(closeOrderDetailAction());
    dispatch(resetIngredientCountAction());
    dispatch(resetBurgerConstructorAction());
  }

  return (
    <>
      <div className={`${styles.order} mt-10`}>
        <div className={`${styles.total} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{totalSum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          size="large"
          onClick={handleClickOrder}
          disabled={!isLockedButton || orderRequest}
        >
          Оформить заказ
        </Button>
      </div>
      {isShowOrder && (
        <Modal onClose={handleCloseModal}>
          {orderRequest ? (
            <PageWrapper>
              <Loader />
            </PageWrapper>
          ) : (
            <OrderDetails />
          )}
        </Modal>
      )}
    </>
  );
};

export default Order;
