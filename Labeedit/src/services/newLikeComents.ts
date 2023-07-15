import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getCommentsByPostId } from './getCommentsByPostId';

export const likeDislikeComents = async (
  coments_id: string,
  token: string,
  post_id: string,
  like: number,
  dispatch: Dispatch,
) => {
  const url = `coments/likes/${coments_id}`;
  const headers = {
    Authorization: token,
  };
  const body = {
    post_id,
    like,
  };

  try {
    const response = await api.post(url, body, { headers });
    getCommentsByPostId(post_id, token, dispatch);
    response.data;
  } catch (error) {
    console.error('Erro ao realizar o Like/Dislike:', error);
  }
};
