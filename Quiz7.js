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
  const correctAnswer = '2. 1999';
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
              In which year did the Indian stock market Index, the SENSEX, cross the 5000 point mark for the first time?
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="1. 1993" checked={selectedOption === '1. 1993'} onChange={handleOptionChange} />
                1993
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="2. 1999" checked={selectedOption === '2. 1999'} onChange={handleOptionChange} />
                1999
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="3. 1991" checked={selectedOption === '3. 1991'} onChange={handleOptionChange} />
                1991
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="4. 1996" checked={selectedOption === '4. 1996'} onChange={handleOptionChange} />
                1996
              </label>
              <br></br>
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
        <button onClick={()=>navigate('/quiz8')}>Next Question</button>
        <span style={{ marginLeft: '200px' }}></span> {/* Adjust the margin value to increase or decrease space */}
        <button onClick={() => navigate('/about')}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default App;
