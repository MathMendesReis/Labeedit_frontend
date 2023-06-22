import React from 'react';
import { Container } from './styles';
import { ReactComponent as IconLike } from '../../assets/iconLike.svg';
import { ReactComponent as IconDisike } from '../../assets/iconDislike.svg';
import { ReactComponent as IconComents } from '../../assets/IconComents.svg';
import { NavLink } from 'react-router-dom';
import { Post } from '../../interfaces/Post';

export function CardPosts({
  post_id,
  user_id,
  content,
  created_at_post,
  update_at_post,
  nameUser,
  likes,
  dislikes,
  totalComments,
}: Post) {
  return (
    <Container>
      <header>
        <p>Enviado por : {nameUser}</p>
      </header>
      <main>
        <p>{content}</p>
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
          <NavLink to='/coments'>
            <IconComents />
          </NavLink>
          <span>{totalComments}</span>
        </div>
      </footer>
    </Container>
  );
}
