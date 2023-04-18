import { useState, useCallback } from "react";

export default function useModalStatus() {
  const [modalStatus, setModalStatus] = useState();

  const openModal = useCallback(() => {
    setModalStatus(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalStatus(false);
  }, []);

  return { modalStatus, openModal, closeModal };
}
