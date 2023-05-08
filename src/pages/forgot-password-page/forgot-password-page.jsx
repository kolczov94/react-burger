import { useState } from "react";

import styles from "./forgot-password-page.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userPasswordForgot } from "../../services/actions/user";
import { selectorUserIsResetPassword } from "../../services/selectors/user";

export default function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const isResetPassword = useSelector(selectorUserIsResetPassword);

  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userPasswordForgot(email));
  }

  if (isResetPassword) {
    return <Navigate to="/reset-password" />;
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
