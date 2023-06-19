import { FC, PropsWithChildren } from "react";
import styles from "./page-wrapper.module.css";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
