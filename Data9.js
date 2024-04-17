import React from 'react';
import Header from '../Components/header'; // Import the Header component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import backgroundImage from '../Images/bk3.jpg'; // Import the background image
import sideimage from '../Images/International.jpg';
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
    navigate('/about');
  };

  return (
    <div style={appStyle}>
     
        <Header />
      
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
              <b><i>The London Stock Exchange (LSE), tracing its roots to the 17th century, is globally renowned, with its primary index, the Financial Times Stock Exchange (FTSE), commonly known as "Footsie" (FTSE), serving as a vital benchmark for global investors and reflecting the UK's economic performance.
                </i></b>
            </Typography>
          </CardContent>
        </Card>
        <button className='animatedButton' onClick={handleButtonClick} style={{ marginLeft: '20px' }}>Go Home</button>
      </div>
    </div>
  );
}

export default App;