import React, { useState, useContext } from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
/*   const [isModalOpen, setIsModalOpen] = useState(false); */
  const { isModalOpen, closeModal } = useGlobalContext();
/*  const closeModal = () => {
  setIsModalOpen(false);

}; */
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>transfer succesfful</h3>
        <p>you will get the coins after 15 to 30 minutes</p>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;