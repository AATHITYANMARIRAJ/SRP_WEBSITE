import React from 'react';
import Header from '../Components/header'; // Import the Header component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import backgroundImage from '../Images/bk3.jpg'; // Import the background image
import sideimage from '../Images/Agencies.jpg';
import { useNavigate } from 'react-router-dom';
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
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/data9');
  };

  return (
    <div style={appStyle}>
      <div>
        <button
          onClick={() => navigate('/about')}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
          }}
        >
          GO BACK HOME
        </button>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img className='animated-image'src={sideimage} alt="Side Image" height='300px' style={{ height: '300px', width: '250px', marginRight: '40px', marginLeft: '0.00000000001px' }} />
        <Card className='animated-image' style={{ maxWidth: 600, maxHeight: 300, margin: '10px 0', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="body1" component="p" style={{ fontSize: '1.5rem', color: 'blue', lineHeight: '1.6', textAlign: 'justify', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', fontWeight: 'bolder' }}>
              <b><i>Regulatory oversight in the Indian stock market is primarily governed by SEBI, with additional roles played by the Reserve Bank of India (RBI) in regulating banking and monetary policies and the Ministry of Corporate Affairs in supervising corporate governance and compliance.</i></b>
            </Typography>
          </CardContent>
        </Card>
        <button className='animatedButton' onClick={handleButtonClick} style={{ marginLeft: '20px' }}>Next</button>
      </div>
    </div>
  );
}

export default App;
