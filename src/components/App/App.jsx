import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import { CUSTOM_DATA } from "../../utils/custom-data";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main} pl-5 pr-5 pb-10`}>
        <BurgerIngredients ingredients={CUSTOM_DATA} />
        <BurgerConstructor ingredients={CUSTOM_DATA} />
      </main>
    </div>
  );
}


export default App;
