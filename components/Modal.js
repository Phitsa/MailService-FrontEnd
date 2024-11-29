import React from 'react';
import Button from './Button';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal-container') {
      onClose();
    }
  };

  return (
    <div
     id="modal-container"
     className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
     onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-1/4" onClick={(event) => event.stopPropagation()}>
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-white  bg-cerise size-7 rounded-full hover:text-cerise border-2 border-cerise hover:bg-white">&times;</button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

