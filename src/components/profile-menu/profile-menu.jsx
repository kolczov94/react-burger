import { NavLink } from "react-router-dom";
import styles from "./profile-menu.module.css";

export default function ProfileMenu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/profile" end>
            {({ isActive }) => (
              <p
                className={`text text_type_main-medium ${
                  isActive ? "text_color_primary" : "text_color_inactive"
                }`}
              >
                Профиль
              </p>
            )}
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/profile/orders">
            {({ isActive }) => (
              <p
                className={`text text_type_main-medium ${
                  isActive ? "text_color_primary" : "text_color_inactive"
                }`}
              >
                История заказов
              </p>
            )}
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/">
            {({ isActive }) => (
              <p
                className={`text text_type_main-medium ${
                  isActive ? "text_color_primary" : "text_color_inactive"
                }`}
              >
                Выход
              </p>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
