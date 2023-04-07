import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import { URL_API } from "../../utils/constants";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then(({ data }) => {
        setIngredients(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main} pl-5 pr-5 pb-10`}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
}

export default App;
