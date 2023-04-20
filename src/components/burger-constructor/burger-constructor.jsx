import { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./burger-constructor.module.css";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import useModalStatus from "../../hooks/use-modal-status";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ConstructorElementBun from "../constructor-element-bun/constructor-element-bun";
import ConstructorList from "../constructor-list/constructor-list";

export default function BurgerConstructor() {
  const constructorList = useSelector(
    (state) => state.ingredients.constructorList
  );
  const { modalStatus, openModal, closeModal } = useModalStatus();

  const totalSum = useMemo(() => {
    return constructorList.reduce((sum, current) => sum + current.price, 0);
  }, [constructorList]);

  return (
    <section className={`${styles.sections} pt-25 ml-4`}>
      <div className={`${styles.list}`}>
        <ConstructorElementBun type="top" />
        <ConstructorList />
        <ConstructorElementBun type="bottom" />
      </div>
      <div className={`${styles.order} mt-10`}>
        <div className={`${styles.total} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{totalSum}</span>
          <CurrencyIcon />
        </div>
        <Button htmlType="submit" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      {modalStatus && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
