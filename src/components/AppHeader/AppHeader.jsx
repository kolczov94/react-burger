import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Profile from "../Profile/Profile";

export default function AppHeader() {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <div className={styles.container}>
        <HeaderMenu />
        <Logo />
        <Profile />
      </div>
    </header>
  );
}
