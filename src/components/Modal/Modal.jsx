const Modal = ({ handleClose, show, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <section className="fixed bg-white w-4/5 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <button
          className="absolute right-1"
          type="button"
          onClick={handleClose}
        >
          Close
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
