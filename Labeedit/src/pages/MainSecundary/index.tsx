import React from 'react';
import { Container } from './styles';
import { HeaderMainSecundary } from '../../components/header/HeaderSecudary';
import { Outlet } from 'react-router-dom';
import { queryClient } from '../../services/queryClient';

function MainSencudary() {
  const queryCache: any = queryClient.getQueryCache();
  console.log(queryCache);
  return (
    <Container>
      <HeaderMainSecundary />
      <Outlet />
    </Container>
  );
}

export default MainSencudary;
