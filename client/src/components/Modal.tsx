import {createPortal} from "react-dom";
import {FC, ReactNode, useRef} from "react";
import {useNavigate} from "react-router-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({children}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = event => {
    if (event.target === modalRef.current) {
      navigate(-1);
    }
  };

  return createPortal(
    <div
      ref={modalRef}
      className="fixed grid grid-cols-2 p-4 left-0 top-0 bg-[rgba(0,0,0,0.3)] w-screen h-screen"
      onClick={handleClick}>
      {children}
    </div>,
    document.getElementById("modal")!,
  );
};

export default Modal;
