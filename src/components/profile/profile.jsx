import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className="pt-4 pb-4 pl-5 pr-5">
      <NavLink to="/profile" className={styles.link}>
        {({ isActive }) => (
          <>
            <ProfileIcon type={isActive ? "" : "secondary"} />
            <span
              className={`text text_type_main-default ${
                isActive ? "text_color_primary" : "text_color_inactive"
              }`}
            >
              Личный кабинет
            </span>
          </>
        )}
      </NavLink>
    </div>
  );
}
