import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-page.module.css";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const onChangeName = () => {};

  return (
    <main className={`${styles.main} pl-5 pr-5 pb-10`}>
      <div className={`${styles.columns} mt-30`}>
        <div className="mr-15">
          <nav className={styles.menu}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <NavLink className={styles.link} to="/profile">
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
              <li className={styles.menu_item}>
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
              <li className={styles.menu_item}>
                <NavLink className={styles.link} to="/">
                  {({ isActive }) => (
                    <p
                      className={`text text_type_main-medium ${
                        isActive ? "text_color_primary" : "text_color_inactive"
                      }`}
                    >
                      Выход
                    </p>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-20">
            <p
              className={`${styles.description} text text_type_main-default text_color_inactive`}
            >
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
        </div>

        <form className={styles.form}>
          <Input
            onChange={onChangeName}
            value={name}
            name={"name"}
            extraClass="mb-6"
            placeholder="Имя"
            type="text"
            icon={'EditIcon'}
          />
          <EmailInput
            onChange={onChangeName}
            value={name}
            name={"email"}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={onChangeName}
            value={name}
            name={"password"}
            icon="EditIcon"
          />
        </form>
      </div>
    </main>
  );
}
