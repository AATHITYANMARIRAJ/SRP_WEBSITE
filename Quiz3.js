import React, { useState, useEffect } from 'react';
import Header from '../Components/header'; // Import the Header component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/bk3.jpg'; // Import the background image
import Swal from 'sweetalert2';
import './Data.css';

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const correctAnswer = '4. a weighted average of the stock prices of a changing set of 30 actively traded stocks.';
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  useEffect(() => {
    if (showAnswer) {
      setCardVisible(true);
      setFeedbackVisible(true);
    }
  }, [showAnswer]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    setIsCorrect(selectedOption === correctAnswer);
    
    if (selectedOption === correctAnswer) {
      Swal.fire({
        title: "Good job!",
        text: "You have answered the question correctly!",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "You have selected the wrong answer.",
        icon: "error"
      });
    }
  };

  return (
    <div style={appStyle}>
      <Header />
      <br />
      <div className={`cardContainer ${cardVisible ? 'show' : ''}`}>
        <Card className={`questionCard ${cardVisible ? 'show' : ''}`}>
          <CardContent>
            <Typography variant="h5" component="h2">
              The Bombay Stock Exchange Sensitive Index or Sensex is
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="1. a simple average of the stock prices of the top 500 companies by market capitalisation." checked={selectedOption === '1. a simple average of the stock prices of the top 500 companies by market capitalisation.'} onChange={handleOptionChange} />
                a simple average of the stock prices of the top 500 companies by market capitalisation.
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="2. a weighted average of the stock prices of the 500 most actively traded shares." checked={selectedOption === '2. a weighted average of the stock prices of the 500 most actively traded shares.'} onChange={handleOptionChange} />
                a weighted average of the stock prices of the 500 most actively traded shares.
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="3. a weighted average of the stock prices of the 50 most actively traded shares." checked={selectedOption === '3. a weighted average of the stock prices of the 50 most actively traded shares.'} onChange={handleOptionChange} />
                a weighted average of the stock prices of the 50 most actively traded shares.
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="4. a weighted average of the stock prices of a changing set of 30 actively traded stocks." checked={selectedOption === '4. a weighted average of the stock prices of a changing set of 30 actively traded stocks.'} onChange={handleOptionChange} />
                a weighted average of the stock prices of a changing set of 30 actively traded stocks.
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="5. None of the above" checked={selectedOption === '5. None of the above'} onChange={handleOptionChange} />
                None of the above
              </label>
            </div>
            <br />
            <button className="checkButton" onClick={handleCheckAnswer}>Check Answer</button>

            {showAnswer && (
              <div className={`feedbackText ${feedbackVisible ? 'show' : ''}`}>
                <Typography variant="h5" component="h2">
                  Answer
                </Typography>
                <Typography variant="body1">
                  The correct answer is: <b>{correctAnswer}</b>
                </Typography>
                {isCorrect ? <p className="feedbackText">Congratulations! You selected the correct answer.</p> : <p className="feedbackText">Oops! You selected the wrong answer.</p>}
              </div>
            )}
          </CardContent>
        </Card>
        <br></br>
        <button onClick={()=>navigate('/quiz4')}>Next Question</button>
        <span style={{ marginLeft: '200px' }}></span> {/* Adjust the margin value to increase or decrease space */}
        <button onClick={() => navigate('/about')}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default App;
