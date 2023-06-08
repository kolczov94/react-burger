import { FC, FormEvent } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-form.module.css";

import { selectorUser } from "../../services/selectors/user";
import { useForm } from "../../hooks/use-form";
import { useDispatch, useSelector } from "../../services/store";
import { userUpdateThunk } from "../../services/actions/user";

const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorUser);

  const { handleChange, setValues, values } = useForm({
    name: user ? user.name : "",
    email: user ? user.email : "",
    password: "",
  });

  const visibleButtons =
    user &&
    (values.name !== user.name ||
      values.email !== user.email ||
      values.password !== "");

  function resetForm() {
    setValues({
      name: user ? user.name : "",
      email: user ? user.email : "",
      password: "",
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      userUpdateThunk({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
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
      {visibleButtons && (
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
