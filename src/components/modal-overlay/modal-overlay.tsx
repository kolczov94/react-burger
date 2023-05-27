import { FC, MouseEvent } from "react";
import styles from "./modal-overlay.module.css";

type IModalOverlayProps = {
  onClose: () => void;
};

const ModalOverlay: FC<IModalOverlayProps> = ({ onClose }) => {
  const handleOverlayClick = (e: MouseEvent): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <div className={styles.overlay} onClick={handleOverlayClick}></div>;
};

export default ModalOverlay;
