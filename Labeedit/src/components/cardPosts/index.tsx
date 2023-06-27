import React from 'react';
import { Container } from './styles';
import { ReactComponent as IconLike } from '../../assets/iconLike.svg';
import { ReactComponent as IconDisike } from '../../assets/iconDislike.svg';
import { ReactComponent as IconComents } from '../../assets/IconComents.svg';
import { NavLink } from 'react-router-dom';
import { Post } from '../../interfaces/Post';

export function CardPosts({
  id,
  contents,
  name_user,
  likes,
  dislikes,
  totalComents,
  coments,
}: Post) {
  return (
    <Container>
      <header>
        <p>Enviado por : {name_user}</p>
      </header>
      <main>
        <p>{contents}</p>
      </main>
      <footer>
        <div>
          <button>
            <IconLike />
          </button>
          <span>{likes}</span>
          <button>
            <IconDisike />
          </button>
        </div>
        <div>
          <NavLink to={`/coments/${id}`}>
            <IconComents />
          </NavLink>
          <span>{totalComents}</span>
        </div>
      </footer>
    </Container>
  );
}
