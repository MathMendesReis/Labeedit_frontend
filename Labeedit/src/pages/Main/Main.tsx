import React from 'react';
import { ButtonCreatedAccount, Container } from './styles';
import InputForm from '../../components/forms/LoginForm';
import HeaderHome from '../../components/header/HeaderHome';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <Container>
      <HeaderHome />
      <InputForm />
      <NavLink to='/createaccount'>
        <ButtonCreatedAccount>Criar conta</ButtonCreatedAccount>
      </NavLink>
    </Container>
  );
}

export default Main;
