import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import iconComents from '../../assets/IconComents.svg';
import iconLike from '../../assets/iconLike.svg';
import iconDislike from '../../assets/iconDislike.svg';
import { useLocation, useParams } from 'react-router-dom';
import { getToken } from '../../helpers/getToken';
import { likeDislikeComents } from '../../services/newLikeComents';
import { useDispatch } from 'react-redux';

export interface propsCardPost {
  coments_id: string;
  nameUser: string;
  contents: string;
  likes: number;
  coments?: number;
}

export default function CardComents({
  coments_id,
  nameUser,
  contents,
  likes,
  coments,
}: propsCardPost) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const { id } = useParams() as { id: string };
  const token = getToken() as string;
  const dispatch = useDispatch();
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
              likeDislikeComents(coments_id, token, id, 1, dispatch);
            }}
          >
            <img src={iconLike} alt='icone para dar like' />
          </button>
          <span>{likes}</span>
          <button
            onClick={() => {
              likeDislikeComents(coments_id, token, id, 0, dispatch);
            }}
          >
            <img src={iconDislike} alt='icone para dar dislike' />
          </button>
        </div>
        {currentUrl === '/postView' && (
          <div>
            <span>{coments}</span>
            <button>
              <img src={iconComents} alt='icone de comentarios' />
            </button>
          </div>
        )}
      </footer>
    </Container>
  );
}
