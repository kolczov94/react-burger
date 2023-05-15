import { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import { closeModalOrderDetail } from "../../services/actions/order";
import {
  selectorBurgerConstructorBun,
  selectorBurgerConstructorIngredients,
} from "../../services/selectors/burger-constructor";
import {
  selectorIsShowOrder,
  selectorOrderRequest,
} from "../../services/selectors/order";
import { resetIngredientCount } from "../../services/actions/ingredients";
import { resetBurgerConstructor } from "../../services/actions/burger-constructor";

interface IOrder {
  handleClickOrder: () => void;
}

const Order: FC<IOrder> = ({ handleClickOrder }) => {
  const dispatch = useDispatch();

  const constructorIngredients = useSelector(
    selectorBurgerConstructorIngredients
  );
  const constructorBun = useSelector(selectorBurgerConstructorBun);
  const orderRequest = useSelector(selectorOrderRequest);
  const isShowOrder = useSelector(selectorIsShowOrder);

  const isLockedButton =
    Boolean(constructorIngredients.length) || Boolean(constructorBun._id);

  const totalSum = useMemo(() => {
    let total = constructorIngredients.reduce(
      (sum: number, current: { price: number }) => sum + current.price,
      0
    );
    if (constructorBun._id) {
      return total + constructorBun.price * 2;
    }
    return total;
  }, [constructorIngredients, constructorBun]);

  function handleCloseModal() {
    dispatch(closeModalOrderDetail());
    dispatch(resetIngredientCount());
    dispatch(resetBurgerConstructor());
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
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default Order;
