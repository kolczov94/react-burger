import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./main-page.module.css";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectorUser } from "../../services/selectors/user";
import { getOrder } from "../../services/actions/order";

export default function MainPage() {
  const user = useSelector(selectorUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClickOrder() {
    user ? dispatch(getOrder()) : navigate("/login");
  }

  return (
    <main className={`${styles.main} pl-5 pr-5 pb-10`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor handleClickOrder={handleClickOrder} />
      </DndProvider>
    </main>
  );
}
