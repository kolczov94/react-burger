import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import moveIcon from "../../images/move-icon.svg";
import { useMemo } from "react";

export default function BurgerConstructor({ ingredients }) {
  const totalSum = useMemo(() => {
    return ingredients.reduce((sum, current) => sum + current.price, 200);
  }, [ingredients]);

  return (
    <section className={`${styles.sections} pt-25 ml-4`}>
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
          {ingredients.map((item) => {
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
          <span className="text text_type_digits-medium mr-2">{totalSum}</span>
          <CurrencyIcon />
        </div>
        <Button htmlType="submit" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
