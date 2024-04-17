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
  const correctAnswer = '4. All of the above';
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
              Stock exchange helps in
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="1. providing liquidity to existing securities" checked={selectedOption === '1. providing liquidity to existing securities'} onChange={handleOptionChange} />
                providing liquidity to existing securities
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="2. contributing to economic growth" checked={selectedOption === '2. contributing to economic growth'} onChange={handleOptionChange} />
                contributing to economic growth
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="3. pricing of securities" checked={selectedOption === '3. pricing of securities'} onChange={handleOptionChange} />
                pricing of securities
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="4. All of the above" checked={selectedOption === '4. All of the above'} onChange={handleOptionChange} />
                All of the above
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
        <button onClick={()=>navigate('/quiz1')}>Next Question</button>
        <span style={{ marginLeft: '200px' }}></span> {/* Adjust the margin value to increase or decrease space */}
        <button onClick={() => navigate('/about')}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default App;
