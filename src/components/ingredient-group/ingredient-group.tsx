import { useRef, useEffect, FC } from "react";
import styles from "./ingredient-group.module.css";

import IngredientItem from "../ingredient-item/ingredient-item";
import { TAddObserverTarget } from "../../hooks/use-observer";

type IIngredientItem = {
  _id: string;
  type: string;
  image: string;
  name: string;
  price: number;
  count: number;
};

type IIngredientGroupProps = {
  list: Array<IIngredientItem>;
  title: string;
  name: string;
  addObserverTarget: TAddObserverTarget;
};

const IngredientGroup: FC<IIngredientGroupProps> = ({
  list,
  title,
  name,
  addObserverTarget,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      addObserverTarget({ key: name, target: titleRef.current });
    }
  }, [addObserverTarget, name]);

  return (
    <div>
      <h2 id={name} ref={titleRef} className="text text_type_main-medium">
        {title}
      </h2>
      <ul
        className={`${styles.list} ml-4 mr-1 mt-6 mb-10`}
        data-test-id="ingredients"
      >
        {list.map((item) => {
          return (
            <IngredientItem
              key={item._id}
              id={item._id}
              type={item.type}
              image={item.image}
              name={item.name}
              price={item.price}
              count={item.count}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientGroup;
