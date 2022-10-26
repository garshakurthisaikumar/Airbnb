import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';
import './App.css';
import React from 'react';
import Title from 'components/Title';
import Btwtitle from './components/Btwtitle';
import LocationCards from 'components/LocationCards';
import Locationcardssec from './components/Locationcardssec';
import Locationcardstrd from './components/Locationcardstrd';
import Container from '@mui/material/Container';
import OptionsTab from './components/Optionstab';
import Bottitle from './components/Bottitle';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
          <Title />
            <LocationCards />
          </Container>
          <OptionsTab />
          <Btwtitle />
          <Locationcardssec />
          <Bottitle />
          <Locationcardstrd />
        </Box>

       
    
        </Box>
        </React.Fragment>
  );
}

export default App;
