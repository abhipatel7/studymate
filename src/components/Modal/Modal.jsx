import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ handleClose, show, children }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 ${
      show ? 'block' : 'hidden'
    }`}
  >
    <section className="fixed bg-white w-1/2 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-scroll">
      <button
        className="absolute right-1"
        type="button"
        onClick={handleClose}
      >
        <AiOutlineClose size={25} />
      </button>
      {children}
    </section>
  </div>
);

export default Modal;
