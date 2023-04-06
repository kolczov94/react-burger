import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-menu.module.css";

export default function HeaderMenu() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className="pl-5 pr-5 pt-4 pb-4">
          <a className={styles.link} href="example.com">
            <BurgerIcon />
            <span className="text text_type_main-default text_color_primary">
              Конструктор
            </span>
          </a>
        </li>
        <li className="pl-5 pr-5 pt-4 pb-4">
          <a className={styles.link} href="example.com">
            <ListIcon type="secondary" />
            <span className="text_type_main-default text_color_inactive">
              Лента заказов
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
