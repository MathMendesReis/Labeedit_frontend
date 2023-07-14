import { Container } from './styles';
import React from 'react';
import iconComents from '../../assets/IconComents.svg';
import iconLike from '../../assets/iconLike.svg';
import iconDislike from '../../assets/iconDislike.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { likeDislikePost } from '../../services/createLikeDislike';
import { getToken } from '../../helpers/getToken';
import { useDispatch } from 'react-redux';
import { getPostById } from '../../services/getPostById';
import { likeDislikeComents } from '../../services/newLikeComents';

export interface propsCardPost {
  post_id: string;
  nameUser: string;
  contents: string;
  likes: number;
  coments?: number;
}

export default function CardPosts({ post_id, nameUser, contents, likes, coments }: propsCardPost) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const token = getToken();
  const dispatch = useDispatch();
  const currentUrl = location.pathname;
  const comentsNavigate = (currentUrl: string) => {
    if (currentUrl === '/postView') {
      navigate(`/comentView/${post_id}`);
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
              if (currentUrl === '/postView') {
                likeDislikePost(post_id, token, 1, currentUrl, dispatch);
              } else {
                if (!id) {
                  return;
                }
                likeDislikeComents(id, token, post_id, 1, currentUrl, dispatch);
              }
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
              if (id === undefined) {
                likeDislikePost(post_id, token, 0, currentUrl, dispatch);
              } else {
                likeDislikeComents(id, token, post_id, 0, currentUrl, dispatch);
              }
            }}
          >
            <img src={iconDislike} alt='icone para dar dislike' />
          </button>
        </div>
        {currentUrl === '/postView' && (
          <div>
            <span>{coments}</span>
            <button
              onClick={() => {
                comentsNavigate(currentUrl);
                if (!token) {
                  return;
                }
                if (currentUrl === '/postView') {
                  getPostById(post_id, token, dispatch);
                }
              }}
            >
              <img src={iconComents} alt='icone de comentarios' />
            </button>
          </div>
        )}
      </footer>
    </Container>
  );
}
