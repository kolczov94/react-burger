import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register-page.module.css";

export default function RegisterPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
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
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <Input
          onChange={onChangeName}
          value={name}
          name={"name"}
          extraClass="mb-6"
          placeholder="Имя"
        />
        <EmailInput
          onChange={onChangeLogin}
          value={login}
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
        <Button htmlType="submit">Зарегистрироваться</Button>
      </form>
      <div className={`${styles.links} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
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
