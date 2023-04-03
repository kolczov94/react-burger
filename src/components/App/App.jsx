import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from "./App.module.css";
import { CUSTOM_DATA } from "../../utils/constants";


function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main} pl-5 pr-5`}>
        <BurgerIngredients data={CUSTOM_DATA} />
        <BurgerConstructor data={CUSTOM_DATA} />
      </main>
    </div>
  );
}

export default App;
