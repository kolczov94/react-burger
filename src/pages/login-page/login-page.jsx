import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { onLogin } from "../../services/actions/user";
import { selectorUser } from "../../services/selectors/user";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(selectorUser);
  const location = useLocation();
  const loactionState = location.state;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(onLogin(email, password));
  }

  useEffect(() => {
    console.log("LOGIN");
  }, []);

  useEffect(() => {
    if (user && loactionState?.from) {
      navigate(loactionState.from);
    }
    if (user && !loactionState?.from) {
      navigate("/");
    }
  }, [loactionState, navigate, user]);

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={`${styles.form} mb-20`} onSubmit={handleSubmit}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          extraClass="mb-6"
          isIcon={false}
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
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
