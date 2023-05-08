import { useState } from "react";
import styles from "./profile-form.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { selectorUser } from "../../services/selectors/user";
import { userUpdate } from "../../services/actions/user";

export default function ProfileForm() {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userUpdate(name, email, password));
    setPassword("");
  }

  function handleReset() {
    setName(user.name);
    setEmail(user.email);
    setPassword("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        name={"name"}
        extraClass="mb-6"
        placeholder="Имя"
        type="text"
        icon={"EditIcon"}
      />
      <EmailInput
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={"password"}
        icon="EditIcon"
        autoComplete="off"
      />
      {(name !== user.name || email !== user.email || password !== "") && (
        <div className={`${styles.buttons} mt-6`}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={handleReset}
          >
            Отмена
          </Button>
          <Button htmlType="submit">Сохранить</Button>
        </div>
      )}
    </form>
  );
}
