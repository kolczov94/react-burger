import { NavLink } from "react-router-dom";
import styles from "./profile-menu.module.css";
import { FC } from "react";
import { useDispatch } from "../../services/store";
import { onLogoutThunk } from "../../services/actions/user";

const ProfileMenu: FC = () => {
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(onLogoutThunk());
  }

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
            onClick={handleExit}
          >
            Выход
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
