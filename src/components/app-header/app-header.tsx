import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

import HeaderMenu from "../header-menu/header-menu";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <div className={styles.container}>
        <HeaderMenu />
        <Link to="/" className={styles.link}>
          <Logo />
        </Link>
        <Profile />
      </div>
    </header>
  );
};

export default AppHeader;
