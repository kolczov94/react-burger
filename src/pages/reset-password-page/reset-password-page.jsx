import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password-page.module.css";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT");
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          extraClass="mb-6"
        />
        <Input
          onChange={onChangeCode}
          value={code}
          name={"code"}
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
