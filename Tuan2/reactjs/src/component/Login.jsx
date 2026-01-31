import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showForm, setShowForm] = useState(true);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className={`container ${showForm ? 'fadeIn' : 'fadeOut'}`}>
      {showForm && (
        <div className="cardForm">
          <button className="close-btn" onClick={handleClose}>×</button>
          <h1 className="title">Login Form</h1>
          <label>Username: </label>
          <input type="text" placeholder="Enter your username" />
          <label>Password: </label>
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
