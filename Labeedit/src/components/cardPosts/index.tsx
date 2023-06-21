import React from 'react';
import { Container } from './styles';
import { ReactComponent as IconLike } from '../../assets/iconLike.svg';

export function CardPosts() {
  return (
    <Container>
      <header>
        <p>Enviado por : Galdino123</p>
      </header>
      <main>
        <p>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?
        </p>
      </main>
      <footer>
        <div>
          <button>
            <IconLike />
          </button>
          <span>5</span>
          <button>
            <IconLike />
          </button>
        </div>
        <div>
          <button>
            <IconLike />
          </button>
          <span>14</span>
        </div>
      </footer>
    </Container>
  );
}
