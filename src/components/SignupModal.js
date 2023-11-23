import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../styles/modalStyles.css';


function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to server
    console.log('Form submitted:', formData);
    closeModal(); // Close modal after form submission (you can modify this behavior as needed)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
        <button onClick={closeModal}>Close</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </Modal>
    </div>
  );
}

Modal.setAppElement('#root'); // Set the root element for the modal

ReactDOM.render(<App />, document.getElementById('root'));
