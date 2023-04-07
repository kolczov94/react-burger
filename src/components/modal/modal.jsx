import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("root-modals");

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className={`${styles.modal} p-10`}>
        <button className={styles.buttonClose} onClick={() => onClose()}>
          <CloseIcon type="primary" />
        </button>
        {Boolean(title) && (
          <span className="text text_type_main-large">{title}</span>
        )}

        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
}
