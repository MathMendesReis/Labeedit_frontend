import { Container } from './styles';
import React from 'react';
import iconComents from '../../assets/IconComents.svg';
import iconLike from '../../assets/iconLike.svg';
import iconDislike from '../../assets/iconDislike.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { likeDislikePost } from '../../services/createLikeDislike';
import { getToken } from '../../helpers/getToken';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../services/getAllPosts';

export interface propsCardPost {
  id: string;
  nameUser: string;
  contents: string;
  likes: number;
  coments: number;
}

export default function CardPosts({ id, nameUser, contents, likes, coments }: propsCardPost) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();
  const dispatch = useDispatch();
  const currentUrl = location.pathname;
  const comentsNavigate = (currentUrl: string) => {
    if (currentUrl === '/postView') {
      navigate('/comentView');
    }
  };
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
          <button
            onClick={() => {
              if (!token) {
                return;
              }
              likeDislikePost(id, token, 1, dispatch);
            }}
          >
            <img src={iconLike} alt='icone para dar like' />
          </button>
          <span>{likes}</span>
          <button
            onClick={() => {
              if (!token) {
                return;
              }
              likeDislikePost(id, token, 0, dispatch);
            }}
          >
            <img src={iconDislike} alt='icone para dar dislike' />
          </button>
        </div>
        <div>
          <span>{coments}</span>
          <button
            onClick={() => {
              comentsNavigate(currentUrl);
            }}
          >
            <img src={iconComents} alt='icone de comentarios' />
          </button>
        </div>
      </footer>
    </Container>
  );
}
