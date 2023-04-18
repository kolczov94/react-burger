import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

import ModalOverlay from "../modal-overlay/modal-overlay";
const modalRoot = document.getElementById("root-modals");

export default function Modal({ title, onClose, children }) {
  const handleKeyboardClose = useCallback(
    (evt) => {
      if (evt.code === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardClose);
    return () => document.removeEventListener("keydown", handleKeyboardClose);
  }, [handleKeyboardClose]);

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

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
