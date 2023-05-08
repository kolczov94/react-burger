import styles from "./error-404-page.module.css";

export default function Error404Page() {
  return (
    <div className={styles.page}>
      <p className="text text_type_digits-large">404</p>
      <p className="text text_type_main-large mt-10" >Такой страницы не существует...</p>
    </div>
  );
}
