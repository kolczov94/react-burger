import { useState } from "react";
import styles from "./profile-form.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const onChangeName = () => {};

  return (
    <form className={styles.form} >
      <Input
        onChange={onChangeName}
        value={name}
        name={"name"}
        extraClass="mb-6"
        placeholder="Имя"
        type="text"
        icon={"EditIcon"}
      />
      <EmailInput
        onChange={onChangeName}
        value={name}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={onChangeName}
        value={name}
        name={"password"}
        icon="EditIcon"
        autoComplete="off"
      />
    </form>
  );
}
