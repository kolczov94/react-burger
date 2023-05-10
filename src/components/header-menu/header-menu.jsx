import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./header-menu.module.css";

export default function HeaderMenu() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className="pl-5 pr-5 pt-4 pb-4">
          <NavLink to="/" className={styles.link}>
            {({ isActive }) => (
              <>
                <BurgerIcon type={isActive ? "" : "secondary"} />
                <span
                  className={`text text_type_main-default ${
                    isActive ? "text_color_primary" : "text_color_inactive"
                  }`}
                >
                  Конструктор
                </span>
              </>
            )}
          </NavLink>
        </li>
        <li className="pl-5 pr-5 pt-4 pb-4">
          <NavLink to="/order-feed" className={styles.link}>
            {({ isActive }) => (
              <>
                <ListIcon type={isActive ? "" : "secondary"} />
                <span
                  className={`text text_type_main-default ${
                    isActive ? "text_color_primary" : "text_color_inactive"
                  }`}
                >
                  Лента заказов
                </span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
