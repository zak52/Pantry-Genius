import React, { useState } from 'react';
import './App.css';
import logo from './Vector.svg';
import appfeatures from './app-features.svg';

const LoginPage = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleGetStartedClick = () => {
    setShowRegistrationPopup(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const closeRegistrationPopup = () => {
    setShowRegistrationPopup(false);
  };

  return (
    <div className="login-page">
      <div className="row">
        <div className="top-half">
        </div>
      </div>
      <div className="row bottom-half">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
          <div className="app-title">
            <h1>Pantry Genius</h1>
          </div>
          <div className="app-features">
            <img src={appfeatures} alt="App Features" />
        </div>
        <button 
            className="btn started-btn"
            onClick={handleGetStartedClick}
        >
            Get Started
        </button>
        <button 
            className="btn login-btn"
            onClick={handleLoginClick}
        >
            Login
        </button>
        <button className="btn guest-btn">Guest</button>
      </div>
      {showLoginForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closeLoginForm}>&times;</span>
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="btn submit-btn">Submit</button>
          </div>
        </div>
      )}
      {showRegistrationPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closeRegistrationPopup}>&times;</span>
            <h2>Register</h2>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="btn submit-btn">Register</button>
          </div>
        </div>
      )}
      <div className="row footer">
        <a>Please agree to the terms and services</a>
      </div>
    </div>
  );
};

export default LoginPage;