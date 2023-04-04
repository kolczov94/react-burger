import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <ProfileIcon type="secondary" />
      <span className="text_type_main-default text_color_inactive">
        Личный кабинет
      </span>
    </div>
  );
}
