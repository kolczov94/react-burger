import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-constructor.module.css";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ConstructorItemBun from "../constructor-item-bun/constructor-item-bun";
import ConstructorList from "../constructor-list/constructor-list";
import {
  closeModalOrderDetail,
  getOrder,
} from "../../services/actions/ingredients";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { constructorList, constructorBun, isShowOrderDetail, orderRequest } =
    useSelector((state) => ({
      constructorList: state.ingredients.constructorList,
      constructorBun: state.ingredients.constructorBun,
      isShowOrderDetail: state.ingredients.isShowOrderDetail,
      orderRequest: state.ingredients.orderRequest,
    }));

  const totalSum = useMemo(() => {
    let total = constructorList.reduce(
      (sum, current) => sum + current.price,
      0
    );
    if (constructorBun._id) {
      return total + constructorBun.price * 2;
    }
    return total;
  }, [constructorList, constructorBun]);

  function handleSubmit() {
    dispatch(getOrder());
  }

  const isLockedButton =
    Boolean(constructorList.length) || Boolean(constructorBun._id);

  return (
    <section className={`${styles.sections} pt-25 ml-4`}>
      <div className={`${styles.list}`}>
        <ConstructorItemBun type="top" />
        <ConstructorList />
        <ConstructorItemBun type="bottom" />
      </div>
      <div className={`${styles.order} mt-10`}>
        <div className={`${styles.total} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{totalSum}</span>
          <CurrencyIcon />
        </div>
        <Button
          htmlType="submit"
          size="large"
          onClick={handleSubmit}
          disabled={!isLockedButton || orderRequest}
        >
          Оформить заказ
        </Button>
      </div>
      {isShowOrderDetail && (
        <Modal onClose={() => dispatch(closeModalOrderDetail())}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
