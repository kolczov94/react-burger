import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className="pt-4 pb-4 pl-5 pr-5">
      <a className={styles.link} href="example.com">
        <ProfileIcon type="secondary" />
        <span className="text text_type_main-default text_color_inactive">
          Личный кабинет
        </span>
      </a>
    </div>
  );
}
