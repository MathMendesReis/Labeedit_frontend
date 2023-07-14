import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getAllPosts } from './getAllPosts';
import { getPostById } from './getPostById';

export const likeDislikeComents = async (
  id: string,
  token: string,
  post_id: string,
  like: number,
  currentUrl: string,
  dispatch: Dispatch,
) => {
  console.log(`
  id:${id}
  token:${token}
  post_id:${post_id}
  like:${like}
  `);
  const url = `coments/likes/${id}`;
  const headers = {
    Authorization: token,
  };
  const body = {
    post_id,
    like,
  };

  try {
    const response = await api.post(url, body, { headers });
    response.data;
    if (currentUrl === '/postView') {
      getAllPosts(token, dispatch);
    } else {
      getPostById(id, token, dispatch);
    }
  } catch (error) {
    console.error('Erro ao realizar o Like/Dislike:', error);
  }
};
