import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../Images/BACKGROUND2.jpg';

const OpeningPage = () => {
  const navigate1 = useNavigate();

  const handleClick = () => {
    // Handle button click action here
    window.location.href = 'http://localhost:8501/'; // Or use routing method of your choice
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#000', marginBottom: '20px' }}><b>WELCOME TO THE STOCK MARKET GUIDE</b></h1>
        <p style={{ color: '#000', fontSize: '1.2rem', marginBottom: '20px' }}>
          Join us to know the stock details of all the companies
        </p>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={handleClick}
        >
          Click Here to Get Started
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;
