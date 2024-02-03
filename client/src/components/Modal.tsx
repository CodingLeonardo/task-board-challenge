import {createPortal} from "react-dom";
import {useRef} from "react";
import {useModal} from "../store";

const Modal = ({children}) => {
  const modalRef = useRef(null);
  const closeModal = useModal(state => state.close);

  const handleClick = event => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return createPortal(
    <div ref={modalRef} className="modal" onClick={handleClick}>
      {children}
    </div>,
    document.getElementById("modal")!,
  );
};

export default Modal;
