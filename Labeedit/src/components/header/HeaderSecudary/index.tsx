import React from 'react';
import { Container } from './styles';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
// import { ReactComponent as IconClose } from '../../../assets/IconClose.svg';
import { NavLink, useLocation, useParams } from 'react-router-dom';

export function HeaderMainSecundary() {
  const location = useLocation();
  const { id } = useParams();
  const clearLocalStorade = () => {
    localStorage.clear();
  };
  return (
    <Container>
      {location.pathname === `/coments/${id}` && (
        <NavLink to='/posts' className='buttonCloseComents'>
          X
        </NavLink>
      )}
      <Logo />
      <NavLink className='button' to=''>
        <button
          className='button'
          onClick={() => {
            clearLocalStorade();
          }}
        >
          {location.pathname === '/createaccount' ? 'Entrar' : 'Logout'}
        </button>
      </NavLink>
    </Container>
  );
}
