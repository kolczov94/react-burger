import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("root-modals");

export default function Modal({ children }) {
  return createPortal(
    <>
      <div className={`${styles.modal} p-10`}>
        <div className={styles.header}>
          <span className="text text_type_main-large">Header</span>
          <button className={styles.close}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={styles.content}></div>
      </div>
      <ModalOverlay />
    </>,
    modalRoot
  );
}
