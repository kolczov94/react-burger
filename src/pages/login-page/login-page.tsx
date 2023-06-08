import { Link } from "react-router-dom";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

import { useForm } from "../../hooks/use-form";
import { FC, FormEvent } from "react";
import { useDispatch } from "../../services/store";
import { onLoginThunk } from "../../services/actions/user";

const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const { handleChange, values } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(onLoginThunk({ email: values.email, password: values.password }));
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name="email"
          extraClass="mb-6"
          isIcon={false}
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
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
};

export default LoginPage;
