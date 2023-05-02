import { useState } from "react";

import styles from "./forgot-password-page.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [login, setLogin] = useState("");

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT");
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <EmailInput
          onChange={onChangeLogin}
          value={login}
          name={"email"}
          extraClass="mb-6"
          isIcon={false}
          placeholder="Укажите e-mail"
        />
        <Button htmlType="submit">Восстановить</Button>
      </form>
      <div className={`${styles.links} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link
          className={`${styles.link} text text_type_main-default text_color_accent`}
          to="/login"
        >
          Войти
        </Link>
      </div>
    </div>
  );
}
