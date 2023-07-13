import { Container } from './styles';
import React from 'react';
import Logo from '../../assets/logo.svg';
import IconClose from '../../assets/IconClose.svg';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function OutletPostView() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = location.pathname;
  const postsNavigate = (currentUrl: string) => {
    if (currentUrl === '/comentView') {
      navigate('/postView');
    }
  };
  return (
    <Container>
      <header>
        {currentUrl === '/comentView' && (
          <button
            onClick={() => {
              postsNavigate(currentUrl);
            }}
          >
            <img src={IconClose} alt='Button para voltar aos posts' />
          </button>
        )}
        <img src={Logo} alt='Logotipo da labenu' />
        <nav>
          <button
            onClick={() => {
              localStorage.clear();
            }}
          >
            <Link to='/'>{currentUrl === '/createaccount' ? 'Entrar' : 'Logout'}</Link>
          </button>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
}
