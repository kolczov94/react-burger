import { FC } from "react";
import styles from "./error-404-page.module.css";

const Error404Page: FC = () => {
  return (
    <div className={styles.page}>
      <p className="text text_type_digits-large">404</p>
      <p className="text text_type_main-large mt-10">
        Такой страницы не существует...
      </p>
    </div>
  );
};

export default Error404Page;
