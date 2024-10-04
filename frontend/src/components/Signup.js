import React, { useState } from 'react';
import axios from 'axios';
import './css/Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newFormData = {
        ...prevData,
        [name]: value,
      };

      // Check if all fields are filled
      const isValid = Object.values(newFormData).every((field) => field.trim() !== '');
      setIsFormValid(isValid);

      return newFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are empty
    const allFieldsEmpty = Object.values(formData).every((field) => field.trim() === '');

    if (allFieldsEmpty) {
      setMissingFields(Object.keys(formData)); // Set all fields as missing
      setShowModal(true); // Show the modal pop-up
      return;
    }

    // Check which specific fields are missing
    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key].trim() === ''
    );

    if (emptyFields.length > 0) {
      setMissingFields(emptyFields);
      setShowModal(true); // Show the modal pop-up
      return;
    }

    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:8081/use', formData);
      const { success, message } = response.data;

      // Check if the username already exists
      if (!success) {
        alert(message); // Show alert if the username already exists
      } else {
        console.log('Signup successful:', message);
        window.location.reload(); // Reload the page on successful signup
      }
    } catch (error) {
      console.error('There was an error with the signup:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className='he2'>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="input1">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name" required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email" required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input1">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username" required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password" required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input1">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password" required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" >SIGN UP</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/signin">Log in</Link></p>
        </div>
      </div>

      {/* Modal Pop-Up for Missing Fields */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Missing Fields</h2>
            <p>Please fill in the following fields: {missingFields.join(', ')}</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
