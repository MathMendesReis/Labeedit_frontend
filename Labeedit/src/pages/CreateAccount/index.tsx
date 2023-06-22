import React from 'react';
import { Container } from './styles';
import SingUpForm from '../../components/forms/SingUpForm';

function CreatedAccountPage() {
  return (
    <Container>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <SingUpForm />
    </Container>
  );
}

export default CreatedAccountPage;
