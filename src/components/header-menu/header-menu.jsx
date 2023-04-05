import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-menu.module.css";

export default function HeaderMenu() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={`${styles.item} pl-5 pr-5 pt-4 pb-4`}>
          <BurgerIcon />
          <span className="text_type_main-default">Конструктор</span>
        </li>
        <li className={`${styles.item} pl-5 pr-5 pt-4 pb-4`}>
          <ListIcon type="secondary" />
          <span className="text_type_main-default text_color_inactive">
            Лента заказов
          </span>
        </li>
      </ul>
    </nav>
  );
}
