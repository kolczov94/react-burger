import styles from "./burger-constructor.module.css";
import ConstructorItemBun from "../constructor-item-bun/constructor-item-bun";
import ConstructorList from "../constructor-list/constructor-list";
import Order from "../order/order";
import { FC } from "react";

const BurgerConstructor: FC = () => {
  return (
    <section className={`${styles.sections} pt-25 ml-4`}>
      <div className={`${styles.list}`}>
        <ConstructorItemBun type="top" />
        <ConstructorList />
        <ConstructorItemBun type="bottom" />
      </div>
      <Order />
    </section>
  );
};

export default BurgerConstructor;
