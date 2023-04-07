import styles from "./modal-overlay.module.css";

export default function ModalOverlay({ onClose }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return <div className={styles.overlay} onClick={handleOverlayClick}></div>;
}
