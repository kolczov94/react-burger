import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={`${styles.profile} pl-5 pr-5 pt-4 pb-4`}>
      <ProfileIcon type="secondary" />
      <span className="text_type_main-default text_color_inactive">
        Личный кабинет
      </span>
    </div>
  );
}
