import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getAllPosts } from './getAllPosts';

export const likeDislikePost = async (
  id: string,
  token: string,
  likeValue: number,
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
    getAllPosts(token, dispatch);
  } catch (error) {
    console.error('Erro ao realizar o Like/Dislike:', error);
  }
};
