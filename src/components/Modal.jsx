import React from "react";

const Modal = ({ open, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/30 flex w-full h-screen items-center justify-center  ${
        open ? "visible" : "invisible"
      }`}
    >
      <div className="p-20 bg-white ">
        <p>Delete This Item?</p>
        <button
          onClick={onClose}
          className="bg-red-500 px-4 py-2 block mx-auto rounded shadow shadow-red-500 font-semibold text-white"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Modal;
