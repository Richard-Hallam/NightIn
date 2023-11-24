import React, { useState } from "react";
import Modal from 'react-modal';
import '../styles/navbar.css';
import TempSearch from "./TempSearch";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#fff',
    maxWidth: '400px', // Adjust the maximum width as needed
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and transparency
  },
};


Modal.setAppElement('#root'); // Set the root element for the modal

function Navbar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Do something after modal opens
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="navbar">
      <div className="brand-match">
        <div className="navtitle">WhittleIt.</div>
      </div>

      <div className="navbuttons">
        <button onClick={openModal}>Signup</button>
        <div className="login-button">
          <button>Login</button>
        </div>
        <div className="temp-search">
          <TempSearch />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Signup Modal"
      >
        {/* Your modal content goes here */}
        <h2>Signup to WhittleIt</h2>
        <button onClick={closeModal}>Close</button>
        {/* Add your signup form or content */}
        {/* ... */}
      </Modal>
    </div>
  );
}

export default Navbar;
