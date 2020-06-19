import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar/Navbar.js'
import './home.scss';

function Home() {
  return (
    <Container style={{padding:0}} maxWidth="false">
      <Navbar /> 
                          
    </Container>
  );
}

export default Home;
