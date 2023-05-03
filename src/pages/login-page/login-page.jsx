import { useState } from "react";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin } from "../../services/actions/user";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(onLogin(email, password));
    console.log("SUBMIT");
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <EmailInput
          onChange={onChangeLogin}
          value={email}
          name={"email"}
          extraClass="mb-6"
          isIcon={false}
        />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          extraClass="mb-6"
        />
        <Button htmlType="submit">Войти</Button>
      </form>
      <div className={`${styles.links} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link
          className={`${styles.link} text text_type_main-default text_color_accent`}
          to="/register"
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.links} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link
          className={`${styles.link} text text_type_main-default text_color_accent`}
          to="/forgot-password"
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}
