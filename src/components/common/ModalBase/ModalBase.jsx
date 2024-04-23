import Modal from "react-modal";

import * as SC from "./ModalBase.styled";

Modal.setAppElement("#root");

export const ModalBase = ({ isOpen, onClose, width, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <SC.Modal data-width={width} {...props}>
          {children}
        </SC.Modal>
      )}
      overlayElement={(props, contentElement) => (
        <SC.Backdrop {...props}>{contentElement}</SC.Backdrop>
      )}
    >
      <SC.CloseBtn type="button" onClick={onClose}>
        <SC.CrossIcon />
      </SC.CloseBtn>
      {children}
    </Modal>
  );
};
