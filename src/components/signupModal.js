import React, { useState } from "react";
import './signupModal.css'; // Include your Modal CSS file

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup form submission logic here
    // For example: sending data to backend, validation, etc.
    console.log("Signup form submitted!");
    setShowModal(false); // Close modal after form submission
  };

  return (
    <div className="page">
      <h1>Welcome to My Website!</h1>
      <button onClick={toggleModal}>Open Signup</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              {/* Your signup form fields */}
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              {/* Other input fields */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
