import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Container } from './styles';

function HeaderHome() {
  return (
    <Container>
      <Logo />
      <h1>LabEddit</h1>
      <h3>O projeto de rede social da Labenu</h3>
    </Container>
  );
}

export default HeaderHome;
