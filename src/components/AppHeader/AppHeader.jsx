import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} pl-5 pr-5 pt-4 pb-4`}>
            <BurgerIcon />
            <div className="text_type_main-default">Конструктор</div>
          </li>
          <li className={`${styles.navItem} pl-5 pr-5 pt-4 pb-4`}>
            <ListIcon type="secondary" />
            <div className="text_type_main-default text_color_inactive">Лента заказов</div>
          </li>
        </ul>
      </nav>
      <Logo />
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} pl-5 pr-5 pt-4 pb-4`}>
            <ProfileIcon type="secondary" />
            <div className="text_type_main-default text_color_inactive">Личный кабинет</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
