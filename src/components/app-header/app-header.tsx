import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

import HeaderMenu from "../header-menu/header-menu";
import Profile from "../profile/profile";

const AppHeader: FC = () => {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <div className={styles.container}>
        <HeaderMenu />
        <Logo />
        <Profile />
      </div>
    </header>
  );
};

export default AppHeader;
