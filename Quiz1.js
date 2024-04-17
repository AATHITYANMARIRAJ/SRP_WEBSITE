import React, { useState } from 'react';
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
  const correctAnswer = 'a) Initial Public Offering';
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
      <div className="cardContainer">
        <Card className="questionCard">
          <CardContent>
            <Typography variant="h5" component="h2">
              What does IPO stand for?
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="a) Initial Public Offering" checked={selectedOption === 'a) Initial Public Offering'} onChange={handleOptionChange} />
                Initial Public Offering
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="b) International Portfolio Operation" checked={selectedOption === 'b) International Portfolio Operation'} onChange={handleOptionChange} />
                International Portfolio Operation
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="c) Investment Portfolio Organization" checked={selectedOption === 'c) Investment Portfolio Organization'} onChange={handleOptionChange} />
                Investment Portfolio Organization
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="d) Internal Price Optimization" checked={selectedOption === 'd) Internal Price Optimization'} onChange={handleOptionChange} />
                Internal Price Optimization
              </label>
            </div>
            <br />
            <button className="checkButton" onClick={handleCheckAnswer}>Check Answer</button>

            {showAnswer && (
              <div>
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
        <button onClick={()=>navigate('/quiz2')}>Next Question</button>
        <span style={{ marginLeft: '200px' }}></span> {/* Adjust the margin value to increase or decrease space */}
        <button onClick={() => navigate('/about')}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default App;
