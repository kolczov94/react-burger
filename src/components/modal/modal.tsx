import { FC, useEffect, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

import ModalOverlay from "../modal-overlay/modal-overlay";
const modalRoot = document.getElementById("root-modals") as HTMLElement;

type IModalProps = {
  title?: string;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  title,
  onClose,
  children,
}) => {
  useEffect(() => {
    const handleKeyboardClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyboardClose);
    return () => document.removeEventListener("keydown", handleKeyboardClose);
  }, [onClose]);

  return createPortal(
    <>
      <div className={`${styles.modal} p-10`}>
        <div className={styles.header}>
          <span className="text text_type_main-large">{title}</span>
          <button className={styles.buttonClose} onClick={() => onClose()}>
            <CloseIcon type="primary" />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
