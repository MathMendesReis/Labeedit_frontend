import React from 'react';
import { ButtonCreatedAccount, Container } from './styles';
import InputForm from '../../components/forms/LoginForm';
import HeaderHome from '../../components/header/HeaderHome';

function Main() {
  return (
    <Container>
      <HeaderHome />
      <InputForm />
      <ButtonCreatedAccount>
        <span>criar</span>
      </ButtonCreatedAccount>
    </Container>
  );
}

export default Main;
