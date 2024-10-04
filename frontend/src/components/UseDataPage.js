import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory to useNavigate
import './css/Profile.css'; // Importing the CSS file

const UseDataPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate replaces useHistory

  // Check if the user is logged in by verifying a token or session
  const isAuthenticated = () => {
    return localStorage.getItem('authToken'); // Assuming the token is stored in localStorage
  };

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!isAuthenticated()) {
      navigate('/login'); // Use navigate to redirect to login page
    } else {
      // Fetch data from the server if authenticated
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8081/use', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}` // Include token in request
            }
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const result = await response.json(); // Assuming the response is in JSON format
          setData(result);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [navigate]); // useNavigate replaces useHistory

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="data-container">
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Displaying the data */}
    </div>
  );
};

export default UseDataPage;
