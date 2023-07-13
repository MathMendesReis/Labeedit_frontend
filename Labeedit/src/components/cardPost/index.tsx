import { Container } from './styles';
import React from 'react';
import iconComents from '../../assets/IconComents.svg';
import iconLike from '../../assets/iconLike.svg';
import iconDislike from '../../assets/iconDislike.svg';

export interface propsCardPost {
  id: string;
  nameUser: string;
  contents: string;
  likes: number;
  comments: number;
}

export default function CardPosts({ id, nameUser, contents, likes, comments }: propsCardPost) {
  return (
    <Container>
      <header>
        <h2>Enviado por: {nameUser} </h2>
      </header>
      <main>
        <span>{contents}</span>
      </main>
      <footer>
        <div>
          <button>
            <img src={iconLike} alt='' />
          </button>
          <span>{likes}</span>
          <button>
            <img src={iconDislike} alt='' />
          </button>
        </div>
        <div>
          <span>{comments}</span>
          <button>
            <img src={iconComents} alt='' />
          </button>
        </div>
      </footer>
    </Container>
  );
}
