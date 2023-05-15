import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-form.module.css";

import { selectorUser } from "../../services/selectors/user";
import { userUpdate } from "../../services/actions/user";
import { useForm } from "../../hooks/use-form";

const ProfileForm: FC = () => {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  const { handleChange, setValues, values } = useForm({
    name: user.name,
    email: user.email,
    password: "",
  });

  function resetForm() {
    setValues({
      name: user.name,
      email: user.email,
      password: "",
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore
    dispatch(userUpdate(values.name, values.email, values.password));
    setValues({ ...values, password: "" });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={values.name}
        name="name"
        extraClass="mb-6"
        placeholder="Имя"
        type="text"
        icon={"EditIcon"}
      />
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name="email"
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password}
        name="password"
        icon="EditIcon"
        autoComplete="off"
      />
      {(values.name !== user.name ||
        values.email !== user.email ||
        values.password !== "") && (
        <div className={`${styles.buttons} mt-6`}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={resetForm}
          >
            Отмена
          </Button>
          <Button htmlType="submit">Сохранить</Button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
