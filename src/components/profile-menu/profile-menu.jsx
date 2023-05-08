import { NavLink } from "react-router-dom";
import styles from "./profile-menu.module.css";
import { useDispatch } from "react-redux";
import { onLogout } from "../../services/actions/user";

export default function ProfileMenu() {
  const dispatch = useDispatch();

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
          <button
            className={`${styles.button} text text_type_main-medium text_color_inactive`}
            type="button"
            onClick={() => dispatch(onLogout())}
          >
            Выход
          </button>
        </li>
      </ul>
    </nav>
  );
}
