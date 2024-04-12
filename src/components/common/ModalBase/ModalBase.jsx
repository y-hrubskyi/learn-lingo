import { useEffect } from "react";

import * as SC from "./ModalBase.styled";

export const ModalBase = ({ onClose, children, width }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <SC.Backdrop onClick={handleOverlayClick}>
      <SC.Modal data-width={width}>
        <SC.CloseBtn type="button" onClick={onClose}>
          <SC.CrossIcon />
        </SC.CloseBtn>
        {children}
      </SC.Modal>
    </SC.Backdrop>
  );
};
