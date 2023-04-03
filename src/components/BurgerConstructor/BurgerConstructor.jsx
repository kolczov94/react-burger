import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import moveIcon from "../../images/move-icon.svg";

export default function BurgerConstructor({ data }) {
  return (
    <section className="mt-25 ml-4">
      <div className={`${styles.list}`}>
        <div className="ml-8 mr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
        <div className={`${styles.elements} custom-scroll`}>
          {data.map((item) => {
            return (
              <div className={`${styles.item} mr-2`} key={item._id}>
                <img className="mr-2" src={moveIcon} alt="move icon" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            );
          })}
        </div>
        <div className="ml-8 mr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${styles.order} mt-10`}>
        <div className={`${styles.total} mr-10`}>
          <span className="text text_type_digits-medium mr-2">
            {data.reduce((sum, current) => sum + current.price, 200)}
          </span>
          <CurrencyIcon />
        </div>
        <Button size="large">Оформить заказ</Button>
      </div>
    </section>
  );
}
