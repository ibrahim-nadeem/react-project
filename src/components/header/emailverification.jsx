import React from "react";
import "./emailverification.css"; // Importing CSS
import jeepimage from '../../image/jeep.jpg' // Adjust the path based on your folder structure

const EmailVerification = () => {
  return (
    <div className="email-verification-container">
      <div className="image-container">
        <img src={jeepimage} alt="jeep" className="car-image" />
        <div className="overlay">
          <h2>Email Verification</h2>
        </div>
      </div>
      <div className="otp-container">
        <p>Enter OTP</p>
        <div className="otp-boxes">
          {[...Array(6)].map((_, index) => (
            <input key={index} type="text" maxLength="1" className="otp-input" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;