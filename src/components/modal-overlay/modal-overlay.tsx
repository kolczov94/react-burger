import { FC, MouseEvent } from "react";
import styles from "./modal-overlay.module.css";

interface IModalOverlay {
  onClose: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ onClose }) => {
  function handleOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return <div className={styles.overlay} onClick={handleOverlayClick}></div>;
};

export default ModalOverlay;
