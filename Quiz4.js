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
  const correctAnswer = '2. Participatory Note';
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
            What is the name of the document issued by registered foreign portfolio 
            investors to overseas investors for participation in the Indian stock market without 
            direct registration?
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="1. Certificate of Deposit" checked={selectedOption === '1. Certificate of Deposit'} onChange={handleOptionChange} />
                Certificate of Deposit
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="2. Participatory Note" checked={selectedOption === '2. Participatory Note'} onChange={handleOptionChange} />
                Participatory Note
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="3. Promissory Note" checked={selectedOption === '3. Promissory Note'} onChange={handleOptionChange} />
                Promissory Note
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="4. More than one of Above" checked={selectedOption === '4. More than one of Above'} onChange={handleOptionChange} />
                More than one of Above
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="5. None of the Above" checked={selectedOption === '5. None of the Above'} onChange={handleOptionChange} />
                None of the Above
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
        <button onClick={()=>navigate('/quiz5')}>Next Question</button>
        <span style={{ marginLeft: '200px' }}></span> {/* Adjust the margin value to increase or decrease space */}
        <button onClick={() => navigate('/about')}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default App;
