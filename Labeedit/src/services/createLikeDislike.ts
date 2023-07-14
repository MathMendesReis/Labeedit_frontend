import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getAllPosts } from './getAllPosts';
import { getPostById } from './getPostById';

export const likeDislikePost = async (
  id: string,
  token: string,
  likeValue: number,
  currentUrl: string,
  dispatch: Dispatch,
) => {
  const url = `/posts/${id}`;
  const headers = {
    Authorization: token,
  };
  const body = {
    like: likeValue,
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
