import React from 'react';
import { Container } from './styles';
import { HeaderMainSecundary } from '../../components/header/HeaderSecudary';
import { Outlet } from 'react-router-dom';

function MainSencudary() {
  return (
    <Container>
      <HeaderMainSecundary />
      <Outlet />
    </Container>
  );
}

export default MainSencudary;
