import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/symbol.jpeg'; // Import the background image from the 'images' folder
import './App.css'; // Import CSS for styling

const OpeningPage = () => {

  const navigate1=useNavigate();
  const navigate2=useNavigate();
  
  const handlePredictionClick = () => {
    // Handle click event for stock market prediction option
    console.log('Stock market prediction option clicked');
  };

  const handleLearnClick = () => {
    // Handle click event for learn stock market option
    console.log('Learn stock market option clicked');
  };

  return (
    <div className="opening-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
       <h1 >WELCOME TO OUR STOCK MARKET WEBSITE</h1>
        <div className="options">
          <button onClick={()=>navigate1('/prediction')}>Stock Market Prediction</button>
          <button onClick={()=>navigate2('/data')}>Learn Stock Market</button>
          <button onClick={()=>navigate2('/quiz')}>Take Up Quiz!!</button>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
