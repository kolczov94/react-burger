import { Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register-page.module.css";
import { useDispatch } from "react-redux";
import { onRegistration } from "../../services/actions/user";
import { useForm } from "../../hooks/use-form";
import { FC, FormEvent } from "react";

const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const { handleChange, values } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore
    dispatch(onRegistration(values.name, values.email, values.password));
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={values.name}
          name="name"
          extraClass="mb-6"
          placeholder="Имя"
        />
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
};

export default RegisterPage;
