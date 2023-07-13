import { Container } from './styles';
import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link, Outlet } from 'react-router-dom';

export default function OutletPostView() {
  const currentUrl = window.location.href;

  return (
    <Container>
      <header>
        <img src={Logo} alt='Logotipo da labenu' />
        <nav>
          <button>
            <Link to='/'>{currentUrl === '/createaccount' ? 'Entrar' : 'Logout'}</Link>
          </button>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
}
