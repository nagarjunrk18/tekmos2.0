import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Thankyou.css';
import confetti from 'canvas-confetti';

const ThankYouScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation on mount for a celebratory effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#87CEEB', '#1E90FF'],
    });
  }, []);

  // Handle click anywhere to navigate to '/'
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div
      className="container-fluid thankyou-container d-flex align-items-center justify-content-center min-vh-100"
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Optional: Add pointer cursor to indicate clickability
    >
      <div className="text-center thankyou-text animate-fadeIn">
        <h1 className="display-4">
          Thank you <br /> for <br /> your time!
        </h1>
      </div>
    </div>
  );
};

export default ThankYouScreen;
