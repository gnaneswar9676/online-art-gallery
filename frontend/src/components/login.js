// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', credentials);
      console.log('Login response:', response.data);
      if (response.data.success) {
        navigate('/SwiperSlider');  // Navigate to AboutPage.js if login is successful
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('There was an error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className='he2'>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input inputp">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username" required
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="input1 input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password" required
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
