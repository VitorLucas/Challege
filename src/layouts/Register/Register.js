import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header.js'
import Stepper from '../../components/Stepper/Stepper.js'
import './register-style.scss';

function Register() {
  return (
    <Container style={{padding:0}} maxWidth="false">    
      <Header/> 
      <Stepper/>                 
    </Container>
  );
}

export default Register;
