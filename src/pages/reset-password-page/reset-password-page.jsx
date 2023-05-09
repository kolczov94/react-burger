import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectorUserIsResetPassword } from "../../services/selectors/user";
import {
  userPasswordForgotReset,
  userPasswordReset,
} from "../../services/actions/user";
import { useForm } from "../../hooks/use-form";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();
  const { handleChange, values } = useForm({
    password: "",
    code: "",
  });

  const isResetPassword = useSelector(selectorUserIsResetPassword);

  useEffect(() => {
    return () => dispatch(userPasswordForgotReset());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userPasswordReset(values.password, values.code));
  }

  if (!isResetPassword) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
          extraClass="mb-6"
        />
        <Input
          onChange={handleChange}
          value={values.code}
          name="code"
          extraClass="mb-6"
          placeholder="Введите код из письма"
        />
        <Button htmlType="submit">Сохранить</Button>
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
